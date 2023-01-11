import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import room_participant_enum_status_enum as shared_room_participant_enum_status_enum
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant as shared_video_v1_room_room_participant


LIST_ROOM_PARTICIPANT_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class ListRoomParticipantPathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListRoomParticipantQueryParams:
    date_created_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedBefore', 'style': 'form', 'explode': True }})
    identity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_room_participant_enum_status_enum.RoomParticipantEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListRoomParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListRoomParticipantListRoomParticipantResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListRoomParticipantListRoomParticipantResponse:
    meta: Optional[ListRoomParticipantListRoomParticipantResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    participants: Optional[list[shared_video_v1_room_room_participant.VideoV1RoomRoomParticipant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclasses.dataclass
class ListRoomParticipantRequest:
    path_params: ListRoomParticipantPathParams = dataclasses.field()
    query_params: ListRoomParticipantQueryParams = dataclasses.field()
    security: ListRoomParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListRoomParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_room_participant_response: Optional[ListRoomParticipantListRoomParticipantResponse] = dataclasses.field(default=None)
    
