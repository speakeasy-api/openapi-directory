import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class DeleteSessionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSessionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSessionRequest:
    path_params: DeleteSessionPathParams = dataclasses.field()
    security: DeleteSessionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
