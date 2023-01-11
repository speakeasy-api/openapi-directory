import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task_sample as shared_preview_understand_assistant_task_sample


UPDATE_UNDERSTAND_SAMPLE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandSamplePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandSampleUpdateUnderstandSampleRequest:
    language: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Language' }})
    source_channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SourceChannel' }})
    tagged_text: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaggedText' }})
    

@dataclasses.dataclass
class UpdateUnderstandSampleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandSampleRequest:
    path_params: UpdateUnderstandSamplePathParams = dataclasses.field()
    security: UpdateUnderstandSampleSecurity = dataclasses.field()
    request: Optional[UpdateUnderstandSampleUpdateUnderstandSampleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandSampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task_sample: Optional[shared_preview_understand_assistant_task_sample.PreviewUnderstandAssistantTaskSample] = dataclasses.field(default=None)
    
