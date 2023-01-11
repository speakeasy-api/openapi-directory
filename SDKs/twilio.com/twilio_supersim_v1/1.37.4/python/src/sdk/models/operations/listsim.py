import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sim_enum_status_enum as shared_sim_enum_status_enum
from ..shared import security as shared_security
from ..shared import supersim_v1_sim as shared_supersim_v1_sim


LIST_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListSimQueryParams:
    fleet: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Fleet', 'style': 'form', 'explode': True }})
    iccid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Iccid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_sim_enum_status_enum.SimEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSimListSimResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSimListSimResponse:
    meta: Optional[ListSimListSimResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    sims: Optional[list[shared_supersim_v1_sim.SupersimV1Sim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sims') }})
    

@dataclasses.dataclass
class ListSimRequest:
    query_params: ListSimQueryParams = dataclasses.field()
    security: ListSimSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sim_response: Optional[ListSimListSimResponse] = dataclasses.field(default=None)
    
