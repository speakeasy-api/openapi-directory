import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import channel_enum_webhook_enabled_type_enum as shared_channel_enum_webhook_enabled_type_enum
from ..shared import channel_enum_channel_type_enum as shared_channel_enum_channel_type_enum
from ..shared import security as shared_security
from ..shared import ip_messaging_v2_service_channel as shared_ip_messaging_v2_service_channel


CREATE_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclasses.dataclass
class CreateChannelPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared_channel_enum_webhook_enabled_type_enum.ChannelEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateChannelCreateChannelRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CreatedBy' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    type: Optional[shared_channel_enum_channel_type_enum.ChannelEnumChannelTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Type' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateChannelRequest:
    headers: CreateChannelHeaders = dataclasses.field()
    path_params: CreateChannelPathParams = dataclasses.field()
    security: CreateChannelSecurity = dataclasses.field()
    request: Optional[CreateChannelCreateChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ip_messaging_v2_service_channel: Optional[shared_ip_messaging_v2_service_channel.IPMessagingV2ServiceChannel] = dataclasses.field(default=None)
    
