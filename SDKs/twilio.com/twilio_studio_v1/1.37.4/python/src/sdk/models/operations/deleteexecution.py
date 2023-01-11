import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class DeleteExecutionPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteExecutionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteExecutionRequest:
    path_params: DeleteExecutionPathParams = dataclasses.field()
    security: DeleteExecutionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
