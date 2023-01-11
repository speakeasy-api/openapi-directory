import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class DeleteFlowPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteFlowRequest:
    path_params: DeleteFlowPathParams = dataclasses.field()
    security: DeleteFlowSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
