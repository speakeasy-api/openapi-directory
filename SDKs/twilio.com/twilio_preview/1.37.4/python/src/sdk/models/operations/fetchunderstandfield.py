import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task_field as shared_preview_understand_assistant_task_field


FETCH_UNDERSTAND_FIELD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchUnderstandFieldPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUnderstandFieldSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUnderstandFieldRequest:
    path_params: FetchUnderstandFieldPathParams = dataclasses.field()
    security: FetchUnderstandFieldSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUnderstandFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task_field: Optional[shared_preview_understand_assistant_task_field.PreviewUnderstandAssistantTaskField] = dataclasses.field(default=None)
    
