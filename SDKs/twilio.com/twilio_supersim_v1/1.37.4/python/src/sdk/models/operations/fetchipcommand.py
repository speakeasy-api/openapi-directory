import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_ip_command as shared_supersim_v1_ip_command


FETCH_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchIPCommandPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchIPCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchIPCommandRequest:
    path_params: FetchIPCommandPathParams = dataclasses.field()
    security: FetchIPCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchIPCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_ip_command: Optional[shared_supersim_v1_ip_command.SupersimV1IPCommand] = dataclasses.field(default=None)
    
