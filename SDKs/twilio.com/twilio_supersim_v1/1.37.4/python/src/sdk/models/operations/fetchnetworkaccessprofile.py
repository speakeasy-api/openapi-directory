import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_network_access_profile as shared_supersim_v1_network_access_profile


FETCH_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchNetworkAccessProfilePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchNetworkAccessProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchNetworkAccessProfileRequest:
    path_params: FetchNetworkAccessProfilePathParams = dataclasses.field()
    security: FetchNetworkAccessProfileSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchNetworkAccessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_network_access_profile: Optional[shared_supersim_v1_network_access_profile.SupersimV1NetworkAccessProfile] = dataclasses.field(default=None)
    
