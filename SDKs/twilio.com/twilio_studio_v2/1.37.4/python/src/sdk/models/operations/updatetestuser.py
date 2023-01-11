import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v2_flow_test_user as shared_studio_v2_flow_test_user


UPDATE_TEST_USER_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class UpdateTestUserPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTestUserUpdateTestUserRequest:
    test_users: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'TestUsers' }})
    

@dataclasses.dataclass
class UpdateTestUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTestUserRequest:
    path_params: UpdateTestUserPathParams = dataclasses.field()
    security: UpdateTestUserSecurity = dataclasses.field()
    request: Optional[UpdateTestUserUpdateTestUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateTestUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_test_user: Optional[shared_studio_v2_flow_test_user.StudioV2FlowTestUser] = dataclasses.field(default=None)
    
