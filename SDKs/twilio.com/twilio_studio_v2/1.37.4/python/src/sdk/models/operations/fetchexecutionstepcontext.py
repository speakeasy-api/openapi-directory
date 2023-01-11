import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v2_flow_execution_execution_step_execution_step_context as shared_studio_v2_flow_execution_execution_step_execution_step_context


FETCH_EXECUTION_STEP_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchExecutionStepContextPathParams:
    execution_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    step_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'StepSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchExecutionStepContextSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchExecutionStepContextRequest:
    path_params: FetchExecutionStepContextPathParams = dataclasses.field()
    security: FetchExecutionStepContextSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchExecutionStepContextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_execution_execution_step_execution_step_context: Optional[shared_studio_v2_flow_execution_execution_step_execution_step_context.StudioV2FlowExecutionExecutionStepExecutionStepContext] = dataclasses.field(default=None)
    
