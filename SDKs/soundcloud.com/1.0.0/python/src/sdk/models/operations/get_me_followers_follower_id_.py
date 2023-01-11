import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import user as shared_user


@dataclasses.dataclass
class GetMeFollowersFollowerIDPathParams:
    follower_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'follower_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMeFollowersFollowerIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeFollowersFollowerIDRequest:
    path_params: GetMeFollowersFollowerIDPathParams = dataclasses.field()
    security: GetMeFollowersFollowerIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeFollowersFollowerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
