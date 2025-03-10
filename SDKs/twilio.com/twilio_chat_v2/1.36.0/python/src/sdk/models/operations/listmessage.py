from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class ListMessagePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMessageQueryParams:
    order: Optional[shared.MessageEnumOrderTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListMessagePathParams = field(default=None)
    query_params: ListMessageQueryParams = field(default=None)
    security: ListMessageSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListMessageListMessageResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListMessageListMessageResponse:
    messages: Optional[List[shared.ChatV2ServiceChannelMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    meta: Optional[ListMessageListMessageResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListMessageResponse:
    content_type: str = field(default=None)
    list_message_response: Optional[ListMessageListMessageResponse] = field(default=None)
    status_code: int = field(default=None)
    
