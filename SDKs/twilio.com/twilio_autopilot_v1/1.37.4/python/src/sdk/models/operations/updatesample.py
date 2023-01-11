import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_task_sample as shared_autopilot_v1_assistant_task_sample


UPDATE_SAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateSamplePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSampleUpdateSampleRequest:
    language: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Language' }})
    source_channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SourceChannel' }})
    tagged_text: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaggedText' }})
    

@dataclasses.dataclass
class UpdateSampleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSampleRequest:
    path_params: UpdateSamplePathParams = dataclasses.field()
    security: UpdateSampleSecurity = dataclasses.field()
    request: Optional[UpdateSampleUpdateSampleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_task_sample: Optional[shared_autopilot_v1_assistant_task_sample.AutopilotV1AssistantTaskSample] = dataclasses.field(default=None)
    
