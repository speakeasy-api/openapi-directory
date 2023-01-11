import dataclasses
from typing import Optional
from enum import Enum
from ..shared import message_enum_webhook_enabled_type_enum as shared_message_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_MESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class DeleteMessagePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared_message_enum_webhook_enabled_type_enum.MessageEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteMessageRequest:
    headers: DeleteMessageHeaders = dataclasses.field()
    path_params: DeleteMessagePathParams = dataclasses.field()
    security: DeleteMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
