import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_service_alpha_sender as shared_messaging_v1_service_alpha_sender


FETCH_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchAlphaSenderPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchAlphaSenderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchAlphaSenderRequest:
    path_params: FetchAlphaSenderPathParams = dataclasses.field()
    security: FetchAlphaSenderSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchAlphaSenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_service_alpha_sender: Optional[shared_messaging_v1_service_alpha_sender.MessagingV1ServiceAlphaSender] = dataclasses.field(default=None)
    
