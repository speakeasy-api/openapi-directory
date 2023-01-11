import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import studio_v1_flow_engagement as shared_studio_v1_flow_engagement


CREATE_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class CreateEngagementPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEngagementCreateEngagementRequest:
    from_: str = dataclasses.field(metadata={'form': { 'field_name': 'From' }})
    to: str = dataclasses.field(metadata={'form': { 'field_name': 'To' }})
    parameters: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Parameters' }})
    

@dataclasses.dataclass
class CreateEngagementSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateEngagementRequest:
    path_params: CreateEngagementPathParams = dataclasses.field()
    security: CreateEngagementSecurity = dataclasses.field()
    request: Optional[CreateEngagementCreateEngagementRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEngagementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v1_flow_engagement: Optional[shared_studio_v1_flow_engagement.StudioV1FlowEngagement] = dataclasses.field(default=None)
    
