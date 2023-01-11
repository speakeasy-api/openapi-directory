import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v1_flow_engagement_step as shared_studio_v1_flow_engagement_step


FETCH_STEP_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchStepPathParams:
    engagement_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchStepSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchStepRequest:
    path_params: FetchStepPathParams = dataclasses.field()
    security: FetchStepSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchStepResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v1_flow_engagement_step: Optional[shared_studio_v1_flow_engagement_step.StudioV1FlowEngagementStep] = dataclasses.field(default=None)
    
