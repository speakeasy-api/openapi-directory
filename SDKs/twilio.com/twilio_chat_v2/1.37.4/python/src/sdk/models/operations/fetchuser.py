import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v2_service_user as shared_chat_v2_service_user


FETCH_USER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class FetchUserPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUserRequest:
    path_params: FetchUserPathParams = dataclasses.field()
    security: FetchUserSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service_user: Optional[shared_chat_v2_service_user.ChatV2ServiceUser] = dataclasses.field(default=None)
    
