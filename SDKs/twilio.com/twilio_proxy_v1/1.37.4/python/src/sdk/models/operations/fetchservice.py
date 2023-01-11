import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service as shared_proxy_v1_service


FETCH_SERVICE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class FetchServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchServiceRequest:
    path_params: FetchServicePathParams = dataclasses.field()
    security: FetchServiceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service: Optional[shared_proxy_v1_service.ProxyV1Service] = dataclasses.field(default=None)
    
