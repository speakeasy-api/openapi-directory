import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ip_messaging_v1_service_channel as shared_ip_messaging_v1_service_channel


FETCH_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class FetchChannelPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchChannelRequest:
    path_params: FetchChannelPathParams = dataclasses.field()
    security: FetchChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v1_service_channel: Optional[shared_ip_messaging_v1_service_channel.IPMessagingV1ServiceChannel] = dataclasses.field(default=None)
    
