import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import studio_v1_flow_execution as shared_studio_v1_flow_execution


CREATE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class CreateExecutionPathParams:
    flow_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateExecutionCreateExecutionRequest:
    from_: str = dataclasses.field(metadata={'form': { 'field_name': 'From' }})
    to: str = dataclasses.field(metadata={'form': { 'field_name': 'To' }})
    parameters: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Parameters' }})
    

@dataclasses.dataclass
class CreateExecutionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateExecutionRequest:
    path_params: CreateExecutionPathParams = dataclasses.field()
    security: CreateExecutionSecurity = dataclasses.field()
    request: Optional[CreateExecutionCreateExecutionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v1_flow_execution: Optional[shared_studio_v1_flow_execution.StudioV1FlowExecution] = dataclasses.field(default=None)
    
