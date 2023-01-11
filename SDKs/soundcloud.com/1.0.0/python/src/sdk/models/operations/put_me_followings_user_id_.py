import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import user as shared_user


@dataclasses.dataclass
class PutMeFollowingsUserIDPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutMeFollowingsUserIDSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutMeFollowingsUserIDRequest:
    path_params: PutMeFollowingsUserIDPathParams = dataclasses.field()
    security: PutMeFollowingsUserIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutMeFollowingsUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    
