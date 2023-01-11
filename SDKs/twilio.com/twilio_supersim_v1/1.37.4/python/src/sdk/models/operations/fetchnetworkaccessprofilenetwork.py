import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_network_access_profile_network_access_profile_network as shared_supersim_v1_network_access_profile_network_access_profile_network


FETCH_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchNetworkAccessProfileNetworkRequest:
    path_params: FetchNetworkAccessProfileNetworkPathParams = dataclasses.field()
    security: FetchNetworkAccessProfileNetworkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchNetworkAccessProfileNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_network_access_profile_network_access_profile_network: Optional[shared_supersim_v1_network_access_profile_network_access_profile_network.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork] = dataclasses.field(default=None)
    
