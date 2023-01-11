import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import insights_v1_video_room_summary_video_participant_summary as shared_insights_v1_video_room_summary_video_participant_summary


LIST_VIDEO_PARTICIPANT_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class ListVideoParticipantSummaryPathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListVideoParticipantSummaryQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListVideoParticipantSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListVideoParticipantSummaryListVideoParticipantSummaryResponse:
    meta: Optional[ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    participants: Optional[list[shared_insights_v1_video_room_summary_video_participant_summary.InsightsV1VideoRoomSummaryVideoParticipantSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclasses.dataclass
class ListVideoParticipantSummaryRequest:
    path_params: ListVideoParticipantSummaryPathParams = dataclasses.field()
    query_params: ListVideoParticipantSummaryQueryParams = dataclasses.field()
    security: ListVideoParticipantSummarySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListVideoParticipantSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_video_participant_summary_response: Optional[ListVideoParticipantSummaryListVideoParticipantSummaryResponse] = dataclasses.field(default=None)
    
