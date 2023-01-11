import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_user_user_channel as shared_ip_messaging_v2_service_user_user_channel


FETCH_USER_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class FetchUserChannelPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUserChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUserChannelRequest:
    path_params: FetchUserChannelPathParams = dataclasses.field()
    security: FetchUserChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUserChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service_user_user_channel: Optional[shared_ip_messaging_v2_service_user_user_channel.IPMessagingV2ServiceUserUserChannel] = dataclasses.field(default=None)
    
