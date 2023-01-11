import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant_room_participant_published_track as shared_video_v1_room_room_participant_room_participant_published_track


LIST_ROOM_PARTICIPANT_PUBLISHED_TRACK_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class ListRoomParticipantPublishedTrackPathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRoomParticipantPublishedTrackQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRoomParticipantPublishedTrackSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse:
    meta: Optional[ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    published_tracks: Optional[list[shared_video_v1_room_room_participant_room_participant_published_track.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published_tracks') }})
    

@dataclasses.dataclass
class ListRoomParticipantPublishedTrackRequest:
    path_params: ListRoomParticipantPublishedTrackPathParams = dataclasses.field()
    query_params: ListRoomParticipantPublishedTrackQueryParams = dataclasses.field()
    security: ListRoomParticipantPublishedTrackSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListRoomParticipantPublishedTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_room_participant_published_track_response: Optional[ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse] = dataclasses.field(default=None)
    
