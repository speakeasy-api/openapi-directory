import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_service_short_code as shared_messaging_v1_service_short_code


FETCH_SHORT_CODE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchShortCodePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchShortCodeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchShortCodeRequest:
    path_params: FetchShortCodePathParams = dataclasses.field()
    security: FetchShortCodeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchShortCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_service_short_code: Optional[shared_messaging_v1_service_short_code.MessagingV1ServiceShortCode] = dataclasses.field(default=None)
    
