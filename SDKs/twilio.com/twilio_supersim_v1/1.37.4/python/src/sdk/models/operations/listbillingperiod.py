import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import supersim_v1_sim_billing_period as shared_supersim_v1_sim_billing_period


LIST_BILLING_PERIOD_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListBillingPeriodPathParams:
    sim_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListBillingPeriodQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListBillingPeriodSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListBillingPeriodListBillingPeriodResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListBillingPeriodListBillingPeriodResponse:
    billing_periods: Optional[list[shared_supersim_v1_sim_billing_period.SupersimV1SimBillingPeriod]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_periods') }})
    meta: Optional[ListBillingPeriodListBillingPeriodResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListBillingPeriodRequest:
    path_params: ListBillingPeriodPathParams = dataclasses.field()
    query_params: ListBillingPeriodQueryParams = dataclasses.field()
    security: ListBillingPeriodSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListBillingPeriodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_billing_period_response: Optional[ListBillingPeriodListBillingPeriodResponse] = dataclasses.field(default=None)
    
