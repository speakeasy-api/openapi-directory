import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flex_v1_web_channel as shared_flex_v1_web_channel


FETCH_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class FetchWebChannelPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWebChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWebChannelRequest:
    path_params: FetchWebChannelPathParams = dataclasses.field()
    security: FetchWebChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWebChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flex_v1_web_channel: Optional[shared_flex_v1_web_channel.FlexV1WebChannel] = dataclasses.field(default=None)
    
