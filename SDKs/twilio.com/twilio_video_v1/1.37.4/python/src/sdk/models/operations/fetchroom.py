import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_room as shared_video_v1_room


FETCH_ROOM_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRoomPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRoomSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRoomRequest:
    path_params: FetchRoomPathParams = dataclasses.field()
    security: FetchRoomSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRoomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room: Optional[shared_video_v1_room.VideoV1Room] = dataclasses.field(default=None)
    
