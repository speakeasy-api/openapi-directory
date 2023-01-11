import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import command_enum_direction_enum as shared_command_enum_direction_enum
from ..shared import command_enum_status_enum as shared_command_enum_status_enum
from ..shared import command_enum_transport_enum as shared_command_enum_transport_enum
from ..shared import security as shared_security
from ..shared import wireless_v1_command as shared_wireless_v1_command


LIST_COMMAND_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class ListCommandQueryParams:
    direction: Optional[shared_command_enum_direction_enum.CommandEnumDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    status: Optional[shared_command_enum_status_enum.CommandEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    transport: Optional[shared_command_enum_transport_enum.CommandEnumTransportEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Transport', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCommandListCommandResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCommandListCommandResponse:
    commands: Optional[list[shared_wireless_v1_command.WirelessV1Command]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    meta: Optional[ListCommandListCommandResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListCommandRequest:
    query_params: ListCommandQueryParams = dataclasses.field()
    security: ListCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_command_response: Optional[ListCommandListCommandResponse] = dataclasses.field(default=None)
    
