import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_web_channel as shared_flex_v1_web_channel


CREATE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class CreateWebChannelCreateWebChannelRequest:
    chat_friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'ChatFriendlyName' }})
    customer_friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'CustomerFriendlyName' }})
    flex_flow_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'FlexFlowSid' }})
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    chat_unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ChatUniqueName' }})
    pre_engagement_data: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PreEngagementData' }})
    

@dataclasses.dataclass
class CreateWebChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWebChannelRequest:
    security: CreateWebChannelSecurity = dataclasses.field()
    request: Optional[CreateWebChannelCreateWebChannelRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWebChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_web_channel: Optional[shared_flex_v1_web_channel.FlexV1WebChannel] = dataclasses.field(default=None)
    
