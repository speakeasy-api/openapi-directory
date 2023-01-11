import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import web_channel_enum_chat_status_enum as shared_web_channel_enum_chat_status_enum
from ..shared import security as shared_security
from ..shared import flex_v1_web_channel as shared_flex_v1_web_channel


UPDATE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class UpdateWebChannelPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWebChannelUpdateWebChannelRequest:
    chat_status: Optional[shared_web_channel_enum_chat_status_enum.WebChannelEnumChatStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChatStatus' }})
    post_engagement_data: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PostEngagementData' }})
    

@dataclasses.dataclass
class UpdateWebChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateWebChannelRequest:
    path_params: UpdateWebChannelPathParams = dataclasses.field()
    security: UpdateWebChannelSecurity = dataclasses.field()
    request: Optional[UpdateWebChannelUpdateWebChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateWebChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_web_channel: Optional[shared_flex_v1_web_channel.FlexV1WebChannel] = dataclasses.field(default=None)
    
