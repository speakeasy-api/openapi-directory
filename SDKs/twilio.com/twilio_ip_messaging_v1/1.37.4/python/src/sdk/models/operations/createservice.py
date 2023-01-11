import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ip_messaging_v1_service as shared_ip_messaging_v1_service


CREATE_SERVICE_SERVERS = [
	"https://ip-messaging.twilio.com",
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
    ip_messaging_v1_service: Optional[shared_ip_messaging_v1_service.IPMessagingV1Service] = dataclasses.field(default=None)
    
