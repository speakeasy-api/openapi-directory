import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_ROOM_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class DeleteRoomRecordingPathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRoomRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteRoomRecordingRequest:
    path_params: DeleteRoomRecordingPathParams = dataclasses.field()
    security: DeleteRoomRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteRoomRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
