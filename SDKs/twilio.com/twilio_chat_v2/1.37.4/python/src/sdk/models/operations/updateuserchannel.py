import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import user_channel_enum_notification_level_enum as shared_user_channel_enum_notification_level_enum
from ..shared import security as shared_security
from ..shared import chat_v2_service_user_user_channel as shared_chat_v2_service_user_user_channel


UPDATE_USER_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class UpdateUserChannelPathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUserChannelUpdateUserChannelRequest:
    last_consumed_message_index: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastConsumedMessageIndex' }})
    last_consumption_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LastConsumptionTimestamp' }})
    notification_level: Optional[shared_user_channel_enum_notification_level_enum.UserChannelEnumNotificationLevelEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NotificationLevel' }})
    

@dataclasses.dataclass
class UpdateUserChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUserChannelRequest:
    path_params: UpdateUserChannelPathParams = dataclasses.field()
    security: UpdateUserChannelSecurity = dataclasses.field()
    request: Optional[UpdateUserChannelUpdateUserChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUserChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service_user_user_channel: Optional[shared_chat_v2_service_user_user_channel.ChatV2ServiceUserUserChannel] = dataclasses.field(default=None)
    
