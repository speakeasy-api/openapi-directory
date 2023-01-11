import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_wireless_command as shared_preview_wireless_command


FETCH_WIRELESS_COMMAND_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchWirelessCommandPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchWirelessCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchWirelessCommandRequest:
    path_params: FetchWirelessCommandPathParams = dataclasses.field()
    security: FetchWirelessCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchWirelessCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_command: Optional[shared_preview_wireless_command.PreviewWirelessCommand] = dataclasses.field(default=None)
    
