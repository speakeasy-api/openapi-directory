import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import flow_enum_status_enum as shared_flow_enum_status_enum
from ..shared import security as shared_security
from ..shared import studio_v2_flow as shared_studio_v2_flow


CREATE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class CreateFlowCreateFlowRequest:
    definition: Any = dataclasses.field(metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    status: shared_flow_enum_status_enum.FlowEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    

@dataclasses.dataclass
class CreateFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateFlowRequest:
    security: CreateFlowSecurity = dataclasses.field()
    request: Optional[CreateFlowCreateFlowRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow: Optional[shared_studio_v2_flow.StudioV2Flow] = dataclasses.field(default=None)
    
