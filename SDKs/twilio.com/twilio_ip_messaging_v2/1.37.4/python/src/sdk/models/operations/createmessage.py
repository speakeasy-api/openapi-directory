import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import message_enum_webhook_enabled_type_enum as shared_message_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_channel_message as shared_ip_messaging_v2_service_channel_message


CREATE_MESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class CreateMessagePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared_message_enum_webhook_enabled_type_enum.MessageEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMessageCreateMessageRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'From' }})
    last_updated_by: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastUpdatedBy' }})
    media_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MediaSid' }})
    

@dataclasses.dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMessageRequest:
    headers: CreateMessageHeaders = dataclasses.field()
    path_params: CreateMessagePathParams = dataclasses.field()
    security: CreateMessageSecurity = dataclasses.field()
    request: Optional[CreateMessageCreateMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service_channel_message: Optional[shared_ip_messaging_v2_service_channel_message.IPMessagingV2ServiceChannelMessage] = dataclasses.field(default=None)
    
