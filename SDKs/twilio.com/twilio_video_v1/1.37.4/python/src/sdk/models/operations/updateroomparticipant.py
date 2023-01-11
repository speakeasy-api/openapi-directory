import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import room_participant_enum_status_enum as shared_room_participant_enum_status_enum
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant as shared_video_v1_room_room_participant


UPDATE_ROOM_PARTICIPANT_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class UpdateRoomParticipantPathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRoomParticipantUpdateRoomParticipantRequest:
    status: Optional[shared_room_participant_enum_status_enum.RoomParticipantEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateRoomParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRoomParticipantRequest:
    path_params: UpdateRoomParticipantPathParams = dataclasses.field()
    security: UpdateRoomParticipantSecurity = dataclasses.field()
    request: Optional[UpdateRoomParticipantUpdateRoomParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoomParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_participant: Optional[shared_video_v1_room_room_participant.VideoV1RoomRoomParticipant] = dataclasses.field(default=None)
    
