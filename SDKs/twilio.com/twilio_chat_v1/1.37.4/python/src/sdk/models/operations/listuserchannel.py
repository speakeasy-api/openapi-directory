import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import chat_v1_service_user_user_channel as shared_chat_v1_service_user_user_channel


LIST_USER_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class ListUserChannelPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListUserChannelQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListUserChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListUserChannelListUserChannelResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListUserChannelListUserChannelResponse:
    channels: Optional[list[shared_chat_v1_service_user_user_channel.ChatV1ServiceUserUserChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    meta: Optional[ListUserChannelListUserChannelResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListUserChannelRequest:
    path_params: ListUserChannelPathParams = dataclasses.field()
    query_params: ListUserChannelQueryParams = dataclasses.field()
    security: ListUserChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListUserChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_user_channel_response: Optional[ListUserChannelListUserChannelResponse] = dataclasses.field(default=None)
    
