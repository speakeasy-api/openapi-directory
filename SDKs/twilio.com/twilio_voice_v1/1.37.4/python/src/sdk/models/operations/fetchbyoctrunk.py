import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import voice_v1_byoc_trunk as shared_voice_v1_byoc_trunk


FETCH_BYOC_TRUNK_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class FetchByocTrunkPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchByocTrunkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchByocTrunkRequest:
    path_params: FetchByocTrunkPathParams = dataclasses.field()
    security: FetchByocTrunkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchByocTrunkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    voice_v1_byoc_trunk: Optional[shared_voice_v1_byoc_trunk.VoiceV1ByocTrunk] = dataclasses.field(default=None)
    
