import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant as shared_preview_understand_assistant


FETCH_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandAssistantPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandAssistantRequest:
    path_params: FetchUnderstandAssistantPathParams = dataclasses.field()
    security: FetchUnderstandAssistantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant: Optional[shared_preview_understand_assistant.PreviewUnderstandAssistant] = dataclasses.field(default=None)
    
