import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import chat_v1_service_channel_message as shared_chat_v1_service_channel_message


CREATE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class CreateMessagePathParams:
    channel_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMessageCreateMessageRequest:
    body: str = dataclasses.field(metadata={'form': { 'field_name': 'Body' }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'From' }})
    

@dataclasses.dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMessageRequest:
    path_params: CreateMessagePathParams = dataclasses.field()
    security: CreateMessageSecurity = dataclasses.field()
    request: Optional[CreateMessageCreateMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    chat_v1_service_channel_message: Optional[shared_chat_v1_service_channel_message.ChatV1ServiceChannelMessage] = dataclasses.field(default=None)
    
