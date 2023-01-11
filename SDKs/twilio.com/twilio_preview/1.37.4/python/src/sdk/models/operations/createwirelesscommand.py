import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_wireless_command as shared_preview_wireless_command


CREATE_WIRELESS_COMMAND_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateWirelessCommandCreateWirelessCommandRequest:
    command: str = dataclasses.field(metadata={'form': { 'field_name': 'Command' }})
    callback_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    command_mode: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommandMode' }})
    device: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Device' }})
    include_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IncludeSid' }})
    sim: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Sim' }})
    

@dataclasses.dataclass
class CreateWirelessCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWirelessCommandRequest:
    security: CreateWirelessCommandSecurity = dataclasses.field()
    request: Optional[CreateWirelessCommandCreateWirelessCommandRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWirelessCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_command: Optional[shared_preview_wireless_command.PreviewWirelessCommand] = dataclasses.field(default=None)
    
