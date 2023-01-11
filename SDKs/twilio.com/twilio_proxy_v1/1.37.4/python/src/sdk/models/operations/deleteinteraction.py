import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class DeleteInteractionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteInteractionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteInteractionRequest:
    path_params: DeleteInteractionPathParams = dataclasses.field()
    security: DeleteInteractionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteInteractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
