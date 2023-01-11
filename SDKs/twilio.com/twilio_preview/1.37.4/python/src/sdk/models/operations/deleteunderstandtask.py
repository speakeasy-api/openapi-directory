import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_UNDERSTAND_TASK_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteUnderstandTaskPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUnderstandTaskSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUnderstandTaskRequest:
    path_params: DeleteUnderstandTaskPathParams = dataclasses.field()
    security: DeleteUnderstandTaskSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUnderstandTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
