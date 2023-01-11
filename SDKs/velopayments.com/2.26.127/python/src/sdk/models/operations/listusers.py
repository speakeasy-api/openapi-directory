import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import userstatus_enum as shared_userstatus_enum
from ..shared import usertype_enum as shared_usertype_enum
from ..shared import pageduserresponse as shared_pageduserresponse


@dataclasses.dataclass
class ListUsersQueryParams:
    entity_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entityId', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[shared_userstatus_enum.UserStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    type: Optional[shared_usertype_enum.UserTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUsersRequest:
    query_params: ListUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_user_response: Optional[shared_pageduserresponse.PagedUserResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
