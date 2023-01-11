import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteUnderstandAssistantPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUnderstandAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUnderstandAssistantRequest:
    path_params: DeleteUnderstandAssistantPathParams = dataclasses.field()
    security: DeleteUnderstandAssistantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUnderstandAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
