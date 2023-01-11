import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_ENGAGEMENT_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class DeleteEngagementPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEngagementSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteEngagementRequest:
    path_params: DeleteEngagementPathParams = dataclasses.field()
    security: DeleteEngagementSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteEngagementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
