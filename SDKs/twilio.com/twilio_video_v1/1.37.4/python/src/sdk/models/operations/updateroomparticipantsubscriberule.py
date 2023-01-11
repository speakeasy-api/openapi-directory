import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant_room_participant_subscribe_rule as shared_video_v1_room_room_participant_room_participant_subscribe_rule


UPDATE_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class UpdateRoomParticipantSubscribeRulePathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest:
    rules: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Rules' }})
    

@dataclasses.dataclass
class UpdateRoomParticipantSubscribeRuleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRoomParticipantSubscribeRuleRequest:
    path_params: UpdateRoomParticipantSubscribeRulePathParams = dataclasses.field()
    security: UpdateRoomParticipantSubscribeRuleSecurity = dataclasses.field()
    request: Optional[UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoomParticipantSubscribeRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_participant_room_participant_subscribe_rule: Optional[shared_video_v1_room_room_participant_room_participant_subscribe_rule.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule] = dataclasses.field(default=None)
    
