import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v2_service_channel_message as shared_chat_v2_service_channel_message


FETCH_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class FetchMessagePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMessageRequest:
    path_params: FetchMessagePathParams = dataclasses.field()
    security: FetchMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v2_service_channel_message: Optional[shared_chat_v2_service_channel_message.ChatV2ServiceChannelMessage] = dataclasses.field(default=None)
    
