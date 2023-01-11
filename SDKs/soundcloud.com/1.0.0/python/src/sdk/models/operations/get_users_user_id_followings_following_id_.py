import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import completeuser as shared_completeuser
from ..shared import error as shared_error


@dataclasses.dataclass
class GetUsersUserIDFollowingsFollowingIDPathParams:
    following_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'following_id', 'style': 'simple', 'explode': False }})
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDFollowingsFollowingIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetUsersUserIDFollowingsFollowingIDRequest:
    path_params: GetUsersUserIDFollowingsFollowingIDPathParams = dataclasses.field()
    security: GetUsersUserIDFollowingsFollowingIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDFollowingsFollowingIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    complete_user: Optional[shared_completeuser.CompleteUser] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
