import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task_sample as shared_preview_understand_assistant_task_sample


CREATE_UNDERSTAND_SAMPLE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandSamplePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUnderstandSampleCreateUnderstandSampleRequest:
    language: str = dataclasses.field(metadata={'form': { 'field_name': 'Language' }})
    tagged_text: str = dataclasses.field(metadata={'form': { 'field_name': 'TaggedText' }})
    source_channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SourceChannel' }})
    

@dataclasses.dataclass
class CreateUnderstandSampleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandSampleRequest:
    path_params: CreateUnderstandSamplePathParams = dataclasses.field()
    security: CreateUnderstandSampleSecurity = dataclasses.field()
    request: Optional[CreateUnderstandSampleCreateUnderstandSampleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandSampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task_sample: Optional[shared_preview_understand_assistant_task_sample.PreviewUnderstandAssistantTaskSample] = dataclasses.field(default=None)
    
