import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media_v1_player_streamer as shared_media_v1_player_streamer


FETCH_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class FetchPlayerStreamerPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchPlayerStreamerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchPlayerStreamerRequest:
    path_params: FetchPlayerStreamerPathParams = dataclasses.field()
    security: FetchPlayerStreamerSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchPlayerStreamerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_player_streamer: Optional[shared_media_v1_player_streamer.MediaV1PlayerStreamer] = dataclasses.field(default=None)
    
