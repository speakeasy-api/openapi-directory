import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v1_flow_engagement as shared_studio_v1_flow_engagement


FETCH_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchEngagementPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEngagementSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEngagementRequest:
    path_params: FetchEngagementPathParams = dataclasses.field()
    security: FetchEngagementSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEngagementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v1_flow_engagement: Optional[shared_studio_v1_flow_engagement.StudioV1FlowEngagement] = dataclasses.field(default=None)
    
