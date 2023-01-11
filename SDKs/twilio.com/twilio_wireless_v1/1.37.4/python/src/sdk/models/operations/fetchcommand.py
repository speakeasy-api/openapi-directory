import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import wireless_v1_command as shared_wireless_v1_command


FETCH_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class FetchCommandPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCommandRequest:
    path_params: FetchCommandPathParams = dataclasses.field()
    security: FetchCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless_v1_command: Optional[shared_wireless_v1_command.WirelessV1Command] = dataclasses.field(default=None)
    
