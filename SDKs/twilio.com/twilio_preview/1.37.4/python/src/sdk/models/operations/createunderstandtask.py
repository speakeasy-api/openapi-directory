import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task as shared_preview_understand_assistant_task


CREATE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandTaskPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUnderstandTaskCreateUnderstandTaskRequest:
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    actions_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ActionsUrl' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateUnderstandTaskSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandTaskRequest:
    path_params: CreateUnderstandTaskPathParams = dataclasses.field()
    security: CreateUnderstandTaskSecurity = dataclasses.field()
    request: Optional[CreateUnderstandTaskCreateUnderstandTaskRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task: Optional[shared_preview_understand_assistant_task.PreviewUnderstandAssistantTask] = dataclasses.field(default=None)
    
