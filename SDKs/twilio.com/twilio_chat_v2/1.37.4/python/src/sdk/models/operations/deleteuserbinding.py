import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_USER_BINDING_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class DeleteUserBindingPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUserBindingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUserBindingRequest:
    path_params: DeleteUserBindingPathParams = dataclasses.field()
    security: DeleteUserBindingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUserBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
