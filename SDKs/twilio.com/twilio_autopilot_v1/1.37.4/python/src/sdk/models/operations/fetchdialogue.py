import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_dialogue as shared_autopilot_v1_assistant_dialogue


FETCH_DIALOGUE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchDialoguePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDialogueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDialogueRequest:
    path_params: FetchDialoguePathParams = dataclasses.field()
    security: FetchDialogueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDialogueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_dialogue: Optional[shared_autopilot_v1_assistant_dialogue.AutopilotV1AssistantDialogue] = dataclasses.field(default=None)
    
