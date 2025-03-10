from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchAssistantPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAssistantSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAssistantRequest:
    path_params: FetchAssistantPathParams = field()
    security: FetchAssistantSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAssistantResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant: Optional[shared.AutopilotV1Assistant] = field(default=None)
    
