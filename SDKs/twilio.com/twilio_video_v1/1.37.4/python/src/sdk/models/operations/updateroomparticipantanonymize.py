import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import video_v1_room_room_participant_room_participant_anonymize as shared_video_v1_room_room_participant_room_participant_anonymize


UPDATE_ROOM_PARTICIPANT_ANONYMIZE_SERVERS = [
	"https://video.twilio.com",
]


@dataclasses.dataclass
class UpdateRoomParticipantAnonymizePathParams:
    room_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RoomSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRoomParticipantAnonymizeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateRoomParticipantAnonymizeRequest:
    path_params: UpdateRoomParticipantAnonymizePathParams = dataclasses.field()
    security: UpdateRoomParticipantAnonymizeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateRoomParticipantAnonymizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_v1_room_room_participant_room_participant_anonymize: Optional[shared_video_v1_room_room_participant_room_participant_anonymize.VideoV1RoomRoomParticipantRoomParticipantAnonymize] = dataclasses.field(default=None)
    
