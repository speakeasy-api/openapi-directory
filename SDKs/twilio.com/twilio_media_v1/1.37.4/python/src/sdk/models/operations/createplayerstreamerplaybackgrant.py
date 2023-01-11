import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import media_v1_player_streamer_player_streamer_playback_grant as shared_media_v1_player_streamer_player_streamer_playback_grant


CREATE_PLAYER_STREAMER_PLAYBACK_GRANT_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class CreatePlayerStreamerPlaybackGrantPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest:
    access_control_allow_origin: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AccessControlAllowOrigin' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class CreatePlayerStreamerPlaybackGrantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreatePlayerStreamerPlaybackGrantRequest:
    path_params: CreatePlayerStreamerPlaybackGrantPathParams = dataclasses.field()
    security: CreatePlayerStreamerPlaybackGrantSecurity = dataclasses.field()
    request: Optional[CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreatePlayerStreamerPlaybackGrantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_player_streamer_player_streamer_playback_grant: Optional[shared_media_v1_player_streamer_player_streamer_playback_grant.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant] = dataclasses.field(default=None)
    
