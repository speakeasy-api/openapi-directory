import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import userlist as shared_userlist


@dataclasses.dataclass
class GetProjectVendorsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectVendorsRequest:
    path_params: GetProjectVendorsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectVendorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_list: Optional[shared_userlist.UserList] = dataclasses.field(default=None)
    
