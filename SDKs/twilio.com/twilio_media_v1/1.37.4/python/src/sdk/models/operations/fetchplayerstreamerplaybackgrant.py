import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media_v1_player_streamer_player_streamer_playback_grant as shared_media_v1_player_streamer_player_streamer_playback_grant


FETCH_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class FetchPlayerStreamerPlaybackGrantPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchPlayerStreamerPlaybackGrantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchPlayerStreamerPlaybackGrantRequest:
    path_params: FetchPlayerStreamerPlaybackGrantPathParams = dataclasses.field()
    security: FetchPlayerStreamerPlaybackGrantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchPlayerStreamerPlaybackGrantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_player_streamer_player_streamer_playback_grant: Optional[shared_media_v1_player_streamer_player_streamer_playback_grant.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant] = dataclasses.field(default=None)
    
