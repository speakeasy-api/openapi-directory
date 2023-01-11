import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import supersim_v1_sms_command as shared_supersim_v1_sms_command


CREATE_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateSmsCommandCreateSmsCommandRequest:
    payload: str = dataclasses.field(metadata={'form': { 'field_name': 'Payload' }})
    sim: str = dataclasses.field(metadata={'form': { 'field_name': 'Sim' }})
    callback_method: Optional[CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    

@dataclasses.dataclass
class CreateSmsCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSmsCommandRequest:
    security: CreateSmsCommandSecurity = dataclasses.field()
    request: Optional[CreateSmsCommandCreateSmsCommandRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSmsCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_sms_command: Optional[shared_supersim_v1_sms_command.SupersimV1SmsCommand] = dataclasses.field(default=None)
    
