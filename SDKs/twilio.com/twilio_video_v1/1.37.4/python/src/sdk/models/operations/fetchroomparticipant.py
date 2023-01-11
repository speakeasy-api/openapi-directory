import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant as shared_video_v1_room_room_participant


FETCH_ROOM_PARTICIPANT_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRoomParticipantPathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRoomParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRoomParticipantRequest:
    path_params: FetchRoomParticipantPathParams = dataclasses.field()
    security: FetchRoomParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRoomParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_participant: Optional[shared_video_v1_room_room_participant.VideoV1RoomRoomParticipant] = dataclasses.field(default=None)
    
