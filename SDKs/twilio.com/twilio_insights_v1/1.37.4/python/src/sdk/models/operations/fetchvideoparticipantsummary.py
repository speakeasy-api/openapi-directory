import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_video_room_summary_video_participant_summary as shared_insights_v1_video_room_summary_video_participant_summary


FETCH_VIDEO_PARTICIPANT_SUMMARY_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchVideoParticipantSummaryPathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchVideoParticipantSummarySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchVideoParticipantSummaryRequest:
    path_params: FetchVideoParticipantSummaryPathParams = dataclasses.field()
    security: FetchVideoParticipantSummarySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchVideoParticipantSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_video_room_summary_video_participant_summary: Optional[shared_insights_v1_video_room_summary_video_participant_summary.InsightsV1VideoRoomSummaryVideoParticipantSummary] = dataclasses.field(default=None)
    
