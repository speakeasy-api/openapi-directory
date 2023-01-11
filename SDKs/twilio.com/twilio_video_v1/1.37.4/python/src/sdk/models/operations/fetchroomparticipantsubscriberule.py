import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant_room_participant_subscribe_rule as shared_video_v1_room_room_participant_room_participant_subscribe_rule


FETCH_ROOM_PARTICIPANT_SUBSCRIBE_RULE_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class FetchRoomParticipantSubscribeRulePathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRoomParticipantSubscribeRuleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRoomParticipantSubscribeRuleRequest:
    path_params: FetchRoomParticipantSubscribeRulePathParams = dataclasses.field()
    security: FetchRoomParticipantSubscribeRuleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRoomParticipantSubscribeRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_participant_room_participant_subscribe_rule: Optional[shared_video_v1_room_room_participant_room_participant_subscribe_rule.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule] = dataclasses.field(default=None)
    
