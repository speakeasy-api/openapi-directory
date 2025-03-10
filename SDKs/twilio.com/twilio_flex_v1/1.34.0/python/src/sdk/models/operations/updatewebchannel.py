from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateWebChannelPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWebChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateWebChannelPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateWebChannelSecurity = field(default=None)
    

@dataclass
class UpdateWebChannelResponses:
    flex_v1_web_channel: Optional[shared.FlexV1WebChannel] = field(default=None)
    

@dataclass
class UpdateWebChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateWebChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
