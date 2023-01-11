import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v1_flow_engagement_engagement_context as shared_studio_v1_flow_engagement_engagement_context


FETCH_ENGAGEMENT_CONTEXT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchEngagementContextPathParams:
    engagement_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EngagementSid', 'style': 'simple', 'explode': False }})
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEngagementContextSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEngagementContextRequest:
    path_params: FetchEngagementContextPathParams = dataclasses.field()
    security: FetchEngagementContextSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEngagementContextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v1_flow_engagement_engagement_context: Optional[shared_studio_v1_flow_engagement_engagement_context.StudioV1FlowEngagementEngagementContext] = dataclasses.field(default=None)
    
