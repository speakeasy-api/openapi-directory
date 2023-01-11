import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class DeleteSamplePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSampleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSampleRequest:
    path_params: DeleteSamplePathParams = dataclasses.field()
    security: DeleteSampleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
