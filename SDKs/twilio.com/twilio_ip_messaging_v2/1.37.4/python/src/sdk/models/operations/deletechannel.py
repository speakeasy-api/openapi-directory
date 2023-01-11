import dataclasses
from typing import Optional
from enum import Enum
from ..shared import channel_enum_webhook_enabled_type_enum as shared_channel_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class DeleteChannelPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared_channel_enum_webhook_enabled_type_enum.ChannelEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteChannelRequest:
    headers: DeleteChannelHeaders = dataclasses.field()
    path_params: DeleteChannelPathParams = dataclasses.field()
    security: DeleteChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
