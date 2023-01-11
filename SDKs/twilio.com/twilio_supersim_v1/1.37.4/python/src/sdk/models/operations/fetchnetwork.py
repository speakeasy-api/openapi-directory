import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_network as shared_supersim_v1_network


FETCH_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchNetworkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchNetworkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchNetworkRequest:
    path_params: FetchNetworkPathParams = dataclasses.field()
    security: FetchNetworkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_network: Optional[shared_supersim_v1_network.SupersimV1Network] = dataclasses.field(default=None)
    
