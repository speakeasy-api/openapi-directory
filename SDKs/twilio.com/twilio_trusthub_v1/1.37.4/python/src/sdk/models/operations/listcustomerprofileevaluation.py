import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile_customer_profile_evaluation as shared_trusthub_v1_customer_profile_customer_profile_evaluation


LIST_CUSTOMER_PROFILE_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class ListCustomerProfileEvaluationPathParams:
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCustomerProfileEvaluationQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCustomerProfileEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse:
    meta: Optional[ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_trusthub_v1_customer_profile_customer_profile_evaluation.TrusthubV1CustomerProfileCustomerProfileEvaluation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class ListCustomerProfileEvaluationRequest:
    path_params: ListCustomerProfileEvaluationPathParams = dataclasses.field()
    query_params: ListCustomerProfileEvaluationQueryParams = dataclasses.field()
    security: ListCustomerProfileEvaluationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCustomerProfileEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_customer_profile_evaluation_response: Optional[ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse] = dataclasses.field(default=None)
    
