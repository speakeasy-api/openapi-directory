import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant as shared_autopilot_v1_assistant


FETCH_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchAssistantPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAssistantRequest:
    path_params: FetchAssistantPathParams = dataclasses.field()
    security: FetchAssistantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant: Optional[shared_autopilot_v1_assistant.AutopilotV1Assistant] = dataclasses.field(default=None)
    
