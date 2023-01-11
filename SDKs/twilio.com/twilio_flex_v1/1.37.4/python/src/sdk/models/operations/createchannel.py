import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_channel as shared_flex_v1_channel


CREATE_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateChannelCreateChannelRequest:
    chat_friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'ChatFriendlyName' }})
    chat_user_friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'ChatUserFriendlyName' }})
    flex_flow_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'FlexFlowSid' }})
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    chat_unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChatUniqueName' }})
    long_lived: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LongLived' }})
    pre_engagement_data: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PreEngagementData' }})
    target: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Target' }})
    task_attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaskAttributes' }})
    task_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaskSid' }})
    

@dataclasses.dataclass
class CreateChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateChannelRequest:
    security: CreateChannelSecurity = dataclasses.field()
    request: Optional[CreateChannelCreateChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_channel: Optional[shared_flex_v1_channel.FlexV1Channel] = dataclasses.field(default=None)
    
