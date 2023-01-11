import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v2_flow_execution_execution_context as shared_studio_v2_flow_execution_execution_context


FETCH_EXECUTION_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchExecutionContextPathParams:
    execution_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ExecutionSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchExecutionContextSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchExecutionContextRequest:
    path_params: FetchExecutionContextPathParams = dataclasses.field()
    security: FetchExecutionContextSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchExecutionContextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_execution_execution_context: Optional[shared_studio_v2_flow_execution_execution_context.StudioV2FlowExecutionExecutionContext] = dataclasses.field(default=None)
    
