import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import routes_v2_trunks as shared_routes_v2_trunks


FETCH_TRUNKS_SERVERS = [
	"https://routes.twilio.com",
]


@dataclasses.dataclass
class FetchTrunksPathParams:
    sip_trunk_domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SipTrunkDomain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrunksSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrunksRequest:
    path_params: FetchTrunksPathParams = dataclasses.field()
    security: FetchTrunksSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrunksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    routes_v2_trunks: Optional[shared_routes_v2_trunks.RoutesV2Trunks] = dataclasses.field(default=None)
    
