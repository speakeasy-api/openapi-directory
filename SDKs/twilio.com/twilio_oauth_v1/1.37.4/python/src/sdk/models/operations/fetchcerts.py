import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import oauth_v1_certs as shared_oauth_v1_certs


FETCH_CERTS_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclasses.dataclass
class FetchCertsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCertsRequest:
    security: FetchCertsSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCertsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    oauth_v1_certs: Optional[shared_oauth_v1_certs.OauthV1Certs] = dataclasses.field(default=None)
    
