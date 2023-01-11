import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_network_access_profile as shared_supersim_v1_network_access_profile


UPDATE_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class UpdateNetworkAccessProfilePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest:
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateNetworkAccessProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateNetworkAccessProfileRequest:
    path_params: UpdateNetworkAccessProfilePathParams = dataclasses.field()
    security: UpdateNetworkAccessProfileSecurity = dataclasses.field()
    request: Optional[UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateNetworkAccessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_network_access_profile: Optional[shared_supersim_v1_network_access_profile.SupersimV1NetworkAccessProfile] = dataclasses.field(default=None)
    
