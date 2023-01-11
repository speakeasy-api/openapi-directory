import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ip_command_enum_payload_type_enum as shared_ip_command_enum_payload_type_enum
from ..shared import security as shared_security
from ..shared import supersim_v1_ip_command as shared_supersim_v1_ip_command


CREATE_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateIPCommandCreateIPCommandRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateIPCommandCreateIPCommandRequest:
    device_port: int = dataclasses.field(metadata={'form': { 'field_name': 'DevicePort' }})
    payload: str = dataclasses.field(metadata={'form': { 'field_name': 'Payload' }})
    sim: str = dataclasses.field(metadata={'form': { 'field_name': 'Sim' }})
    callback_method: Optional[CreateIPCommandCreateIPCommandRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    payload_type: Optional[shared_ip_command_enum_payload_type_enum.IPCommandEnumPayloadTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'PayloadType' }})
    

@dataclasses.dataclass
class CreateIPCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateIPCommandRequest:
    security: CreateIPCommandSecurity = dataclasses.field()
    request: Optional[CreateIPCommandCreateIPCommandRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateIPCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_ip_command: Optional[shared_supersim_v1_ip_command.SupersimV1IPCommand] = dataclasses.field(default=None)
    
