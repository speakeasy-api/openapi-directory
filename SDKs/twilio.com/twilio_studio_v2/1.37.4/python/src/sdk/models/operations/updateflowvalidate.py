import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import flow_validate_enum_status_enum as shared_flow_validate_enum_status_enum
from ..shared import security as shared_security
from ..shared import studio_v2_flow_validate as shared_studio_v2_flow_validate


UPDATE_FLOW_VALIDATE_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class UpdateFlowValidateUpdateFlowValidateRequest:
    definition: Any = dataclasses.field(metadata={'form': { 'field_name': 'Definition' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    status: shared_flow_validate_enum_status_enum.FlowValidateEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    commit_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommitMessage' }})
    

@dataclasses.dataclass
class UpdateFlowValidateSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateFlowValidateRequest:
    security: UpdateFlowValidateSecurity = dataclasses.field()
    request: Optional[UpdateFlowValidateUpdateFlowValidateRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateFlowValidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_validate: Optional[shared_studio_v2_flow_validate.StudioV2FlowValidate] = dataclasses.field(default=None)
    
