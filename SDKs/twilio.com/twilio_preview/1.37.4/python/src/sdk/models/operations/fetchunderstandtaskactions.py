import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task_task_actions as shared_preview_understand_assistant_task_task_actions


FETCH_UNDERSTAND_TASK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandTaskActionsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandTaskActionsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandTaskActionsRequest:
    path_params: FetchUnderstandTaskActionsPathParams = dataclasses.field()
    security: FetchUnderstandTaskActionsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandTaskActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task_task_actions: Optional[shared_preview_understand_assistant_task_task_actions.PreviewUnderstandAssistantTaskTaskActions] = dataclasses.field(default=None)
    
