import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import player_streamer_enum_update_status_enum as shared_player_streamer_enum_update_status_enum
from ..shared import security as shared_security
from ..shared import media_v1_player_streamer as shared_media_v1_player_streamer


UPDATE_PLAYER_STREAMER_SERVERS = [
	"https://media.twilio.com",
]


@dataclasses.dataclass
class UpdatePlayerStreamerPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePlayerStreamerUpdatePlayerStreamerRequest:
    status: shared_player_streamer_enum_update_status_enum.PlayerStreamerEnumUpdateStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdatePlayerStreamerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdatePlayerStreamerRequest:
    path_params: UpdatePlayerStreamerPathParams = dataclasses.field()
    security: UpdatePlayerStreamerSecurity = dataclasses.field()
    request: Optional[UpdatePlayerStreamerUpdatePlayerStreamerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdatePlayerStreamerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    media_v1_player_streamer: Optional[shared_media_v1_player_streamer.MediaV1PlayerStreamer] = dataclasses.field(default=None)
    
