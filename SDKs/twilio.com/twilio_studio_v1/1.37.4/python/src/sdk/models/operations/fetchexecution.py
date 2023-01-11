import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v1_flow_execution as shared_studio_v1_flow_execution


FETCH_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchExecutionPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchExecutionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchExecutionRequest:
    path_params: FetchExecutionPathParams = dataclasses.field()
    security: FetchExecutionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v1_flow_execution: Optional[shared_studio_v1_flow_execution.StudioV1FlowExecution] = dataclasses.field(default=None)
    
