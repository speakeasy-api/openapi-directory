import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import player_streamer_enum_order_enum as shared_player_streamer_enum_order_enum
from ..shared import player_streamer_enum_status_enum as shared_player_streamer_enum_status_enum
from ..shared import security as shared_security
from ..shared import media_v1_player_streamer as shared_media_v1_player_streamer


LIST_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class ListPlayerStreamerQueryParams:
    order: Optional[shared_player_streamer_enum_order_enum.PlayerStreamerEnumOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_player_streamer_enum_status_enum.PlayerStreamerEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPlayerStreamerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListPlayerStreamerListPlayerStreamerResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListPlayerStreamerListPlayerStreamerResponse:
    meta: Optional[ListPlayerStreamerListPlayerStreamerResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    player_streamers: Optional[list[shared_media_v1_player_streamer.MediaV1PlayerStreamer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player_streamers') }})
    

@dataclasses.dataclass
class ListPlayerStreamerRequest:
    query_params: ListPlayerStreamerQueryParams = dataclasses.field()
    security: ListPlayerStreamerSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListPlayerStreamerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_player_streamer_response: Optional[ListPlayerStreamerListPlayerStreamerResponse] = dataclasses.field(default=None)
    
