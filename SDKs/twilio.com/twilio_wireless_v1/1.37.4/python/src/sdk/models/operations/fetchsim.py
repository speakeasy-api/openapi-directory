import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import wireless_v1_sim as shared_wireless_v1_sim


FETCH_SIM_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class FetchSimPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSimRequest:
    path_params: FetchSimPathParams = dataclasses.field()
    security: FetchSimSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless_v1_sim: Optional[shared_wireless_v1_sim.WirelessV1Sim] = dataclasses.field(default=None)
    
