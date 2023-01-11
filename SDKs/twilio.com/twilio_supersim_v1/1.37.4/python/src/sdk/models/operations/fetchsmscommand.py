import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_sms_command as shared_supersim_v1_sms_command


FETCH_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class FetchSmsCommandPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSmsCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSmsCommandRequest:
    path_params: FetchSmsCommandPathParams = dataclasses.field()
    security: FetchSmsCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSmsCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_sms_command: Optional[shared_supersim_v1_sms_command.SupersimV1SmsCommand] = dataclasses.field(default=None)
    
