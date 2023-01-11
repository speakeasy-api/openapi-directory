import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_channel_channel_webhook as shared_ip_messaging_v2_service_channel_channel_webhook


FETCH_CHANNEL_WEBHOOK_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class FetchChannelWebhookPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchChannelWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchChannelWebhookRequest:
    path_params: FetchChannelWebhookPathParams = dataclasses.field()
    security: FetchChannelWebhookSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchChannelWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service_channel_channel_webhook: Optional[shared_ip_messaging_v2_service_channel_channel_webhook.IPMessagingV2ServiceChannelChannelWebhook] = dataclasses.field(default=None)
    
