import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v1_flow_engagement_step_step_context as shared_studio_v1_flow_engagement_step_step_context


FETCH_STEP_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchStepContextPathParams:
    engagement_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    step_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'StepSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchStepContextSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchStepContextRequest:
    path_params: FetchStepContextPathParams = dataclasses.field()
    security: FetchStepContextSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchStepContextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v1_flow_engagement_step_step_context: Optional[shared_studio_v1_flow_engagement_step_step_context.StudioV1FlowEngagementStepStepContext] = dataclasses.field(default=None)
    
