import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ip_command_enum_direction_enum as shared_ip_command_enum_direction_enum
from ..shared import ip_command_enum_status_enum as shared_ip_command_enum_status_enum
from ..shared import security as shared_security
from ..shared import supersim_v1_ip_command as shared_supersim_v1_ip_command


LIST_IP_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListIPCommandQueryParams:
    direction: Optional[shared_ip_command_enum_direction_enum.IPCommandEnumDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    sim_iccid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SimIccid', 'style': 'form', 'explode': True }})
    status: Optional[shared_ip_command_enum_status_enum.IPCommandEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListIPCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListIPCommandListIPCommandResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListIPCommandListIPCommandResponse:
    ip_commands: Optional[list[shared_supersim_v1_ip_command.SupersimV1IPCommand]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_commands') }})
    meta: Optional[ListIPCommandListIPCommandResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListIPCommandRequest:
    query_params: ListIPCommandQueryParams = dataclasses.field()
    security: ListIPCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListIPCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_ip_command_response: Optional[ListIPCommandListIPCommandResponse] = dataclasses.field(default=None)
    
