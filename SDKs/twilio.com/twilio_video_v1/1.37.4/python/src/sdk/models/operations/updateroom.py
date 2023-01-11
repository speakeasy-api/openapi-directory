import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import room_enum_room_status_enum as shared_room_enum_room_status_enum
from ..shared import security as shared_security
from ..shared import video_v1_room as shared_video_v1_room


UPDATE_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class UpdateRoomPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRoomUpdateRoomRequest:
    status: shared_room_enum_room_status_enum.RoomEnumRoomStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateRoomSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRoomRequest:
    path_params: UpdateRoomPathParams = dataclasses.field()
    security: UpdateRoomSecurity = dataclasses.field()
    request: Optional[UpdateRoomUpdateRoomRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room: Optional[shared_video_v1_room.VideoV1Room] = dataclasses.field(default=None)
    
