import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_recording_rule as shared_video_v1_room_room_recording_rule


UPDATE_ROOM_RECORDING_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class UpdateRoomRecordingRulePathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest:
    rules: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Rules' }})
    

@dataclasses.dataclass
class UpdateRoomRecordingRuleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRoomRecordingRuleRequest:
    path_params: UpdateRoomRecordingRulePathParams = dataclasses.field()
    security: UpdateRoomRecordingRuleSecurity = dataclasses.field()
    request: Optional[UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoomRecordingRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_recording_rule: Optional[shared_video_v1_room_room_recording_rule.VideoV1RoomRoomRecordingRule] = dataclasses.field(default=None)
    
