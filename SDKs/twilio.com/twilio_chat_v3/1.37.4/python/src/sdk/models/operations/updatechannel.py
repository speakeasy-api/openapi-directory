import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import channel_enum_webhook_enabled_type_enum as shared_channel_enum_webhook_enabled_type_enum
from ..shared import channel_enum_channel_type_enum as shared_channel_enum_channel_type_enum
from ..shared import security as shared_security
from ..shared import chat_v3_channel as shared_chat_v3_channel


UPDATE_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class UpdateChannelPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared_channel_enum_webhook_enabled_type_enum.ChannelEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateChannelUpdateChannelRequest:
    messaging_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    type: Optional[shared_channel_enum_channel_type_enum.ChannelEnumChannelTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclasses.dataclass
class UpdateChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateChannelRequest:
    headers: UpdateChannelHeaders = dataclasses.field()
    path_params: UpdateChannelPathParams = dataclasses.field()
    security: UpdateChannelSecurity = dataclasses.field()
    request: Optional[UpdateChannelUpdateChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v3_channel: Optional[shared_chat_v3_channel.ChatV3Channel] = dataclasses.field(default=None)
    
