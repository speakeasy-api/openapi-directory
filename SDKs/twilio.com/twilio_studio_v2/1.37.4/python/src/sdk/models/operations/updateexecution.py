import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import execution_enum_status_enum as shared_execution_enum_status_enum
from ..shared import security as shared_security
from ..shared import studio_v2_flow_execution as shared_studio_v2_flow_execution


UPDATE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class UpdateExecutionPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateExecutionUpdateExecutionRequest:
    status: shared_execution_enum_status_enum.ExecutionEnumStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateExecutionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateExecutionRequest:
    path_params: UpdateExecutionPathParams = dataclasses.field()
    security: UpdateExecutionSecurity = dataclasses.field()
    request: Optional[UpdateExecutionUpdateExecutionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow_execution: Optional[shared_studio_v2_flow_execution.StudioV2FlowExecution] = dataclasses.field(default=None)
    
