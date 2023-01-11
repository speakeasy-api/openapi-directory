import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import studio_v2_flow as shared_studio_v2_flow


FETCH_FLOW_SERVERS = [
	"https://studio.twilio.com",
]


@dataclasses.dataclass
class FetchFlowPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFlowRequest:
    path_params: FetchFlowPathParams = dataclasses.field()
    security: FetchFlowSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    studio_v2_flow: Optional[shared_studio_v2_flow.StudioV2Flow] = dataclasses.field(default=None)
    
