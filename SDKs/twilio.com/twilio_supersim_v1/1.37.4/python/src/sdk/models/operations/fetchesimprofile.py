import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_esim_profile as shared_supersim_v1_esim_profile


FETCH_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchEsimProfilePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEsimProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEsimProfileRequest:
    path_params: FetchEsimProfilePathParams = dataclasses.field()
    security: FetchEsimProfileSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEsimProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_esim_profile: Optional[shared_supersim_v1_esim_profile.SupersimV1EsimProfile] = dataclasses.field(default=None)
    
