import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v2_service as shared_chat_v2_service


CREATE_SERVICE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class CreateServiceCreateServiceRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = dataclasses.field()
    request: Optional[CreateServiceCreateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service: Optional[shared_chat_v2_service.ChatV2Service] = dataclasses.field(default=None)
    
