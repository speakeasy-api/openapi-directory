import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_video_room_summary as shared_insights_v1_video_room_summary


FETCH_VIDEO_ROOM_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchVideoRoomSummaryPathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchVideoRoomSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVideoRoomSummaryRequest:
    path_params: FetchVideoRoomSummaryPathParams = dataclasses.field()
    security: FetchVideoRoomSummarySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVideoRoomSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_video_room_summary: Optional[shared_insights_v1_video_room_summary.InsightsV1VideoRoomSummary] = dataclasses.field(default=None)
    
