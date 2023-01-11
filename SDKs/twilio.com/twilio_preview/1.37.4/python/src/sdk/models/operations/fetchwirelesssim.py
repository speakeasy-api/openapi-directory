import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_wireless_sim as shared_preview_wireless_sim


FETCH_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchWirelessSimPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWirelessSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWirelessSimRequest:
    path_params: FetchWirelessSimPathParams = dataclasses.field()
    security: FetchWirelessSimSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWirelessSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_sim: Optional[shared_preview_wireless_sim.PreviewWirelessSim] = dataclasses.field(default=None)
    
