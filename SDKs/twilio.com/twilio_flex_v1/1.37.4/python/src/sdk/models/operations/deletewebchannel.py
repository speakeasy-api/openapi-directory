import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclasses.dataclass
class DeleteWebChannelPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteWebChannelRequest:
    path_params: DeleteWebChannelPathParams = dataclasses.field()
    security: DeleteWebChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteWebChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
