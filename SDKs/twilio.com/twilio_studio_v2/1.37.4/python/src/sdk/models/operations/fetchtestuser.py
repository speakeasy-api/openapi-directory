import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v2_flow_test_user as shared_studio_v2_flow_test_user


FETCH_TEST_USER_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchTestUserPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTestUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTestUserRequest:
    path_params: FetchTestUserPathParams = dataclasses.field()
    security: FetchTestUserSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTestUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_test_user: Optional[shared_studio_v2_flow_test_user.StudioV2FlowTestUser] = dataclasses.field(default=None)
    
