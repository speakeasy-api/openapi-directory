import dataclasses
from typing import Optional
from enum import Enum
from ..shared import command_enum_command_mode_enum as shared_command_enum_command_mode_enum
from ..shared import security as shared_security
from ..shared import wireless_v1_command as shared_wireless_v1_command


CREATE_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]

class CreateCommandCreateCommandRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateCommandCreateCommandRequest:
    command: str = dataclasses.field(metadata={'form': { 'field_name': 'Command' }})
    callback_method: Optional[CreateCommandCreateCommandRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    command_mode: Optional[shared_command_enum_command_mode_enum.CommandEnumCommandModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommandMode' }})
    delivery_receipt_requested: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeliveryReceiptRequested' }})
    include_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IncludeSid' }})
    sim: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Sim' }})
    

@dataclasses.dataclass
class CreateCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCommandRequest:
    security: CreateCommandSecurity = dataclasses.field()
    request: Optional[CreateCommandCreateCommandRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless_v1_command: Optional[shared_wireless_v1_command.WirelessV1Command] = dataclasses.field(default=None)
    
