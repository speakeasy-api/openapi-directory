from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared
CREATE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class CreateFlowCreateFlowRequest:
    commit_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    definition: Any = field(default=None, metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: shared.FlowEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class CreateFlowSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateFlowRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateFlowCreateFlowRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateFlowSecurity = field(default=None)
    

@dataclass
class CreateFlowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    studio_v2_flow: Optional[shared.StudioV2Flow] = field(default=None)
    
