import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_network_access_profile_network_access_profile_network as shared_supersim_v1_network_access_profile_network_access_profile_network


CREATE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class CreateNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest:
    network: str = dataclasses.field(metadata={'form': { 'field_name': 'Network' }})
    

@dataclasses.dataclass
class CreateNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateNetworkAccessProfileNetworkRequest:
    path_params: CreateNetworkAccessProfileNetworkPathParams = dataclasses.field()
    security: CreateNetworkAccessProfileNetworkSecurity = dataclasses.field()
    request: Optional[CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkAccessProfileNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_network_access_profile_network_access_profile_network: Optional[shared_supersim_v1_network_access_profile_network_access_profile_network.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork] = dataclasses.field(default=None)
    
