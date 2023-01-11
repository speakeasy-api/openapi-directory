import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import video_room_summary_enum_codec_enum as shared_video_room_summary_enum_codec_enum
from ..shared import video_room_summary_enum_room_type_enum as shared_video_room_summary_enum_room_type_enum
from ..shared import security as shared_security
from ..shared import insights_v1_video_room_summary as shared_insights_v1_video_room_summary


LIST_VIDEO_ROOM_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class ListVideoRoomSummaryQueryParams:
    codec: Optional[list[shared_video_room_summary_enum_codec_enum.VideoRoomSummaryEnumCodecEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Codec', 'style': 'form', 'explode': True }})
    created_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CreatedAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CreatedBefore', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    room_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RoomName', 'style': 'form', 'explode': True }})
    room_type: Optional[list[shared_video_room_summary_enum_room_type_enum.VideoRoomSummaryEnumRoomTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RoomType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListVideoRoomSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListVideoRoomSummaryListVideoRoomSummaryResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListVideoRoomSummaryListVideoRoomSummaryResponse:
    meta: Optional[ListVideoRoomSummaryListVideoRoomSummaryResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    rooms: Optional[list[shared_insights_v1_video_room_summary.InsightsV1VideoRoomSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rooms') }})
    

@dataclasses.dataclass
class ListVideoRoomSummaryRequest:
    query_params: ListVideoRoomSummaryQueryParams = dataclasses.field()
    security: ListVideoRoomSummarySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListVideoRoomSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_video_room_summary_response: Optional[ListVideoRoomSummaryListVideoRoomSummaryResponse] = dataclasses.field(default=None)
    
