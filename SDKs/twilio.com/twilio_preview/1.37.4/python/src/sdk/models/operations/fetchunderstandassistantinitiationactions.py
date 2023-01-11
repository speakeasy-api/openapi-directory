import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_assistant_initiation_actions as shared_preview_understand_assistant_assistant_initiation_actions


FETCH_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandAssistantInitiationActionsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandAssistantInitiationActionsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandAssistantInitiationActionsRequest:
    path_params: FetchUnderstandAssistantInitiationActionsPathParams = dataclasses.field()
    security: FetchUnderstandAssistantInitiationActionsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandAssistantInitiationActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_assistant_initiation_actions: Optional[shared_preview_understand_assistant_assistant_initiation_actions.PreviewUnderstandAssistantAssistantInitiationActions] = dataclasses.field(default=None)
    
