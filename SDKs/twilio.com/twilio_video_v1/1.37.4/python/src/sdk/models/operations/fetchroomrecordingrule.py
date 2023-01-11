import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_recording_rule as shared_video_v1_room_room_recording_rule


FETCH_ROOM_RECORDING_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRoomRecordingRulePathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRoomRecordingRuleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRoomRecordingRuleRequest:
    path_params: FetchRoomRecordingRulePathParams = dataclasses.field()
    security: FetchRoomRecordingRuleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRoomRecordingRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_recording_rule: Optional[shared_video_v1_room_room_recording_rule.VideoV1RoomRoomRecordingRule] = dataclasses.field(default=None)
    
