import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import flow_enum_status_enum as shared_flow_enum_status_enum
from ..shared import security as shared_security
from ..shared import studio_v2_flow as shared_studio_v2_flow


UPDATE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class UpdateFlowPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFlowUpdateFlowRequest:
    status: shared_flow_enum_status_enum.FlowEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    definition: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateFlowRequest:
    path_params: UpdateFlowPathParams = dataclasses.field()
    security: UpdateFlowSecurity = dataclasses.field()
    request: Optional[UpdateFlowUpdateFlowRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow: Optional[shared_studio_v2_flow.StudioV2Flow] = dataclasses.field(default=None)
    
