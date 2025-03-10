"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import channel_enum_channel_type_enum as shared_channel_enum_channel_type_enum
from ..shared import chat_v2_service_channel as shared_chat_v2_service_channel
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional

LIST_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclasses.dataclass
class ListChannelSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class ListChannelRequest:
    
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    r"""The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the Channel resources from."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Page', 'style': 'form', 'explode': True }})
    r"""The page index. This value is simply for client state."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    r"""How many resources to return in each list page. The default is 50, and the maximum is 1000."""  
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    r"""The page token. This is provided by the API."""  
    type: Optional[list[shared_channel_enum_channel_type_enum.ChannelEnumChannelTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    r"""The visibility of the Channels to read. Can be: `public` or `private` and defaults to `public`."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListChannelListChannelResponseMeta:
    
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('first_page_url'), 'exclude': lambda f: f is None }})  
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('key'), 'exclude': lambda f: f is None }})  
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('next_page_url'), 'exclude': lambda f: f is None }})  
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page'), 'exclude': lambda f: f is None }})  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page_size'), 'exclude': lambda f: f is None }})  
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('previous_page_url'), 'exclude': lambda f: f is None }})  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListChannelListChannelResponse:
    r"""OK"""
    
    channels: Optional[list[shared_chat_v2_service_channel.ChatV2ServiceChannel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('channels'), 'exclude': lambda f: f is None }})  
    meta: Optional[ListChannelListChannelResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('meta'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class ListChannelResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    list_channel_response: Optional[ListChannelListChannelResponse] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    