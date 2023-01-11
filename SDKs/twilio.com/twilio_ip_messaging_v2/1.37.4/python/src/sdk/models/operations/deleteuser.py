import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_USER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class DeleteUserPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUserRequest:
    path_params: DeleteUserPathParams = dataclasses.field()
    security: DeleteUserSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
