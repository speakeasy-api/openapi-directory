import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import media_v1_player_streamer as shared_media_v1_player_streamer


CREATE_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]

class CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreatePlayerStreamerCreatePlayerStreamerRequest:
    max_duration: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MaxDuration' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    status_callback_method: Optional[CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallbackMethod' }})
    video: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Video' }})
    

@dataclasses.dataclass
class CreatePlayerStreamerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreatePlayerStreamerRequest:
    security: CreatePlayerStreamerSecurity = dataclasses.field()
    request: Optional[CreatePlayerStreamerCreatePlayerStreamerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreatePlayerStreamerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_player_streamer: Optional[shared_media_v1_player_streamer.MediaV1PlayerStreamer] = dataclasses.field(default=None)
    
