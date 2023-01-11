import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class DeleteFlexFlowPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFlexFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteFlexFlowRequest:
    path_params: DeleteFlexFlowPathParams = dataclasses.field()
    security: DeleteFlexFlowSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteFlexFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
