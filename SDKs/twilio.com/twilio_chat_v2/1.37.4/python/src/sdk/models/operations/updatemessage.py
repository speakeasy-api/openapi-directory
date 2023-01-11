import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import message_enum_webhook_enabled_type_enum as shared_message_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import chat_v2_service_channel_message as shared_chat_v2_service_channel_message


UPDATE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class UpdateMessagePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared_message_enum_webhook_enabled_type_enum.MessageEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateMessageUpdateMessageRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'From' }})
    last_updated_by: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastUpdatedBy' }})
    

@dataclasses.dataclass
class UpdateMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateMessageRequest:
    headers: UpdateMessageHeaders = dataclasses.field()
    path_params: UpdateMessagePathParams = dataclasses.field()
    security: UpdateMessageSecurity = dataclasses.field()
    request: Optional[UpdateMessageUpdateMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service_channel_message: Optional[shared_chat_v2_service_channel_message.ChatV2ServiceChannelMessage] = dataclasses.field(default=None)
    
