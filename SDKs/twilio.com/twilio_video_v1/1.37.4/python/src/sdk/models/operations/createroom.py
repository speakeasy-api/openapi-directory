import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import room_enum_room_type_enum as shared_room_enum_room_type_enum
from ..shared import room_enum_video_codec_enum as shared_room_enum_video_codec_enum
from ..shared import security as shared_security
from ..shared import video_v1_room as shared_video_v1_room


CREATE_ROOM_SERVERS = [
	"https://video.twilio.com",
]

class CreateRoomCreateRoomRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateRoomCreateRoomRequest:
    audio_only: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AudioOnly' }})
    empty_room_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EmptyRoomTimeout' }})
    enable_turn: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EnableTurn' }})
    large_room: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LargeRoom' }})
    max_participant_duration: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxParticipantDuration' }})
    max_participants: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxParticipants' }})
    media_region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MediaRegion' }})
    record_participants_on_connect: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordParticipantsOnConnect' }})
    recording_rules: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RecordingRules' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreateRoomCreateRoomRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    type: Optional[shared_room_enum_room_type_enum.RoomEnumRoomTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Type' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    unused_room_timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UnusedRoomTimeout' }})
    video_codecs: Optional[list[shared_room_enum_video_codec_enum.RoomEnumVideoCodecEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VideoCodecs' }})
    

@dataclasses.dataclass
class CreateRoomSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateRoomRequest:
    security: CreateRoomSecurity = dataclasses.field()
    request: Optional[CreateRoomCreateRoomRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateRoomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room: Optional[shared_video_v1_room.VideoV1Room] = dataclasses.field(default=None)
    
