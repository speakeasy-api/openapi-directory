import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_flex_flow as shared_flex_v1_flex_flow


FETCH_FLEX_FLOW_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class FetchFlexFlowPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFlexFlowSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFlexFlowRequest:
    path_params: FetchFlexFlowPathParams = dataclasses.field()
    security: FetchFlexFlowSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFlexFlowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_flex_flow: Optional[shared_flex_v1_flex_flow.FlexV1FlexFlow] = dataclasses.field(default=None)
    
