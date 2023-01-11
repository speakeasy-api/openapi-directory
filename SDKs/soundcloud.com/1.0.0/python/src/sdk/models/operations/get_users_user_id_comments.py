import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import comment as shared_comment
from ..shared import error as shared_error


@dataclasses.dataclass
class GetUsersUserIDCommentsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDCommentsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersUserIDCommentsSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetUsersUserIDCommentsRequest:
    path_params: GetUsersUserIDCommentsPathParams = dataclasses.field()
    query_params: GetUsersUserIDCommentsQueryParams = dataclasses.field()
    security: GetUsersUserIDCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comments_list: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
