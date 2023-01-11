import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant_room_participant_subscribed_track as shared_video_v1_room_room_participant_room_participant_subscribed_track


FETCH_ROOM_PARTICIPANT_SUBSCRIBED_TRACK_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRoomParticipantSubscribedTrackPathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRoomParticipantSubscribedTrackSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRoomParticipantSubscribedTrackRequest:
    path_params: FetchRoomParticipantSubscribedTrackPathParams = dataclasses.field()
    security: FetchRoomParticipantSubscribedTrackSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRoomParticipantSubscribedTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_participant_room_participant_subscribed_track: Optional[shared_video_v1_room_room_participant_room_participant_subscribed_track.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack] = dataclasses.field(default=None)
    
