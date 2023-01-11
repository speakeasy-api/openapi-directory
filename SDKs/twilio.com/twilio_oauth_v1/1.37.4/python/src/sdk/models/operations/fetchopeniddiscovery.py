import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import oauth_v1_openid_discovery as shared_oauth_v1_openid_discovery


FETCH_OPENID_DISCOVERY_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclasses.dataclass
class FetchOpenidDiscoverySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchOpenidDiscoveryRequest:
    security: FetchOpenidDiscoverySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchOpenidDiscoveryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oauth_v1_openid_discovery: Optional[shared_oauth_v1_openid_discovery.OauthV1OpenidDiscovery] = dataclasses.field(default=None)
    
