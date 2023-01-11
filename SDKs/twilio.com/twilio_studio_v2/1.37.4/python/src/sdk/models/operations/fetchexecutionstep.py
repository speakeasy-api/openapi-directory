import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v2_flow_execution_execution_step as shared_studio_v2_flow_execution_execution_step


FETCH_EXECUTION_STEP_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchExecutionStepPathParams:
    execution_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchExecutionStepSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchExecutionStepRequest:
    path_params: FetchExecutionStepPathParams = dataclasses.field()
    security: FetchExecutionStepSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchExecutionStepResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_execution_execution_step: Optional[shared_studio_v2_flow_execution_execution_step.StudioV2FlowExecutionExecutionStep] = dataclasses.field(default=None)
    
