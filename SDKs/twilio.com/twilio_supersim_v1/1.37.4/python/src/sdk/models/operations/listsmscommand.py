import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sms_command_enum_direction_enum as shared_sms_command_enum_direction_enum
from ..shared import sms_command_enum_status_enum as shared_sms_command_enum_status_enum
from ..shared import security as shared_security
from ..shared import supersim_v1_sms_command as shared_supersim_v1_sms_command


LIST_SMS_COMMAND_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListSmsCommandQueryParams:
    direction: Optional[shared_sms_command_enum_direction_enum.SmsCommandEnumDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    status: Optional[shared_sms_command_enum_status_enum.SmsCommandEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSmsCommandSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSmsCommandListSmsCommandResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSmsCommandListSmsCommandResponse:
    meta: Optional[ListSmsCommandListSmsCommandResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    sms_commands: Optional[list[shared_supersim_v1_sms_command.SupersimV1SmsCommand]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms_commands') }})
    

@dataclasses.dataclass
class ListSmsCommandRequest:
    query_params: ListSmsCommandQueryParams = dataclasses.field()
    security: ListSmsCommandSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSmsCommandResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sms_command_response: Optional[ListSmsCommandListSmsCommandResponse] = dataclasses.field(default=None)
    
