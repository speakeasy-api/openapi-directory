import dataclasses
from typing import Optional
from enum import Enum
from ..shared import userlist as shared_userlist

class GetUsersUserTypeEnum(str, Enum):
    VENDOR = "vendor"
    ALL = "all"


@dataclasses.dataclass
class GetUsersQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    user_type: Optional[GetUsersUserTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_list: Optional[shared_userlist.UserList] = dataclasses.field(default=None)
    
