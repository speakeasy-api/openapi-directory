import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_recording as shared_video_v1_room_room_recording


FETCH_ROOM_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRoomRecordingPathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRoomRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRoomRecordingRequest:
    path_params: FetchRoomRecordingPathParams = dataclasses.field()
    security: FetchRoomRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRoomRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_recording: Optional[shared_video_v1_room_room_recording.VideoV1RoomRoomRecording] = dataclasses.field(default=None)
    
