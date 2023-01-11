import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import projectlist as shared_projectlist


@dataclasses.dataclass
class GetVendorProjectsByUserIDPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVendorProjectsByUserIDQueryParams:
    completed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed', 'style': 'form', 'explode': True }})
    joined: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'joined', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVendorProjectsByUserIDRequest:
    path_params: GetVendorProjectsByUserIDPathParams = dataclasses.field()
    query_params: GetVendorProjectsByUserIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVendorProjectsByUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project_list: Optional[shared_projectlist.ProjectList] = dataclasses.field(default=None)
    
