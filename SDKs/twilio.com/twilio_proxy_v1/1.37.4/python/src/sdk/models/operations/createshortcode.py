import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_short_code as shared_proxy_v1_service_short_code


CREATE_SHORT_CODE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class CreateShortCodePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateShortCodeCreateShortCodeRequest:
    sid: str = dataclasses.field(metadata={'form': { 'field_name': 'Sid' }})
    

@dataclasses.dataclass
class CreateShortCodeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateShortCodeRequest:
    path_params: CreateShortCodePathParams = dataclasses.field()
    security: CreateShortCodeSecurity = dataclasses.field()
    request: Optional[CreateShortCodeCreateShortCodeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateShortCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_short_code: Optional[shared_proxy_v1_service_short_code.ProxyV1ServiceShortCode] = dataclasses.field(default=None)
    
