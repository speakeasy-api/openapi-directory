import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_network_access_profile as shared_supersim_v1_network_access_profile


CREATE_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class CreateNetworkAccessProfileCreateNetworkAccessProfileRequest:
    networks: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Networks' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateNetworkAccessProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateNetworkAccessProfileRequest:
    security: CreateNetworkAccessProfileSecurity = dataclasses.field()
    request: Optional[CreateNetworkAccessProfileCreateNetworkAccessProfileRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkAccessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_network_access_profile: Optional[shared_supersim_v1_network_access_profile.SupersimV1NetworkAccessProfile] = dataclasses.field(default=None)
    
