import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import preview_wireless_sim as shared_preview_wireless_sim


LIST_WIRELESS_SIM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class ListWirelessSimQueryParams:
    e_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'EId', 'style': 'form', 'explode': True }})
    iccid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Iccid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    rate_plan: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RatePlan', 'style': 'form', 'explode': True }})
    sim_registration_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SimRegistrationCode', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListWirelessSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListWirelessSimListWirelessSimResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWirelessSimListWirelessSimResponse:
    meta: Optional[ListWirelessSimListWirelessSimResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    sims: Optional[list[shared_preview_wireless_sim.PreviewWirelessSim]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sims') }})
    

@dataclasses.dataclass
class ListWirelessSimRequest:
    query_params: ListWirelessSimQueryParams = dataclasses.field()
    security: ListWirelessSimSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListWirelessSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_wireless_sim_response: Optional[ListWirelessSimListWirelessSimResponse] = dataclasses.field(default=None)
    
