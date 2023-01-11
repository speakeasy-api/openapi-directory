import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session as shared_proxy_v1_service_session


FETCH_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class FetchSessionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSessionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSessionRequest:
    path_params: FetchSessionPathParams = dataclasses.field()
    security: FetchSessionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session: Optional[shared_proxy_v1_service_session.ProxyV1ServiceSession] = dataclasses.field(default=None)
    
