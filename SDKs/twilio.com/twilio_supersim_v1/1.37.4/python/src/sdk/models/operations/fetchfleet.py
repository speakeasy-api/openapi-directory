import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_fleet as shared_supersim_v1_fleet


FETCH_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchFleetPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFleetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFleetRequest:
    path_params: FetchFleetPathParams = dataclasses.field()
    security: FetchFleetSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFleetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_fleet: Optional[shared_supersim_v1_fleet.SupersimV1Fleet] = dataclasses.field(default=None)
    
