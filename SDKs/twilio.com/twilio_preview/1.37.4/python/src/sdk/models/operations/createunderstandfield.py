import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task_field as shared_preview_understand_assistant_task_field


CREATE_UNDERSTAND_FIELD_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandFieldPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUnderstandFieldCreateUnderstandFieldRequest:
    field_type: str = dataclasses.field(metadata={'form': { 'field_name': 'FieldType' }})
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateUnderstandFieldSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandFieldRequest:
    path_params: CreateUnderstandFieldPathParams = dataclasses.field()
    security: CreateUnderstandFieldSecurity = dataclasses.field()
    request: Optional[CreateUnderstandFieldCreateUnderstandFieldRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task_field: Optional[shared_preview_understand_assistant_task_field.PreviewUnderstandAssistantTaskField] = dataclasses.field(default=None)
    
