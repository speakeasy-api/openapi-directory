import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_service_alpha_sender as shared_messaging_v1_service_alpha_sender


CREATE_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class CreateAlphaSenderPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAlphaSenderCreateAlphaSenderRequest:
    alpha_sender: str = dataclasses.field(metadata={'form': { 'field_name': 'AlphaSender' }})
    

@dataclasses.dataclass
class CreateAlphaSenderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAlphaSenderRequest:
    path_params: CreateAlphaSenderPathParams = dataclasses.field()
    security: CreateAlphaSenderSecurity = dataclasses.field()
    request: Optional[CreateAlphaSenderCreateAlphaSenderRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateAlphaSenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_service_alpha_sender: Optional[shared_messaging_v1_service_alpha_sender.MessagingV1ServiceAlphaSender] = dataclasses.field(default=None)
    
