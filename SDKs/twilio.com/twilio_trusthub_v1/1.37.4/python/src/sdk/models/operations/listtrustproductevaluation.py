import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product_trust_product_evaluation as shared_trusthub_v1_trust_product_trust_product_evaluation


LIST_TRUST_PRODUCT_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class ListTrustProductEvaluationPathParams:
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTrustProductEvaluationQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListTrustProductEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListTrustProductEvaluationListTrustProductEvaluationResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListTrustProductEvaluationListTrustProductEvaluationResponse:
    meta: Optional[ListTrustProductEvaluationListTrustProductEvaluationResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[list[shared_trusthub_v1_trust_product_trust_product_evaluation.TrusthubV1TrustProductTrustProductEvaluation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class ListTrustProductEvaluationRequest:
    path_params: ListTrustProductEvaluationPathParams = dataclasses.field()
    query_params: ListTrustProductEvaluationQueryParams = dataclasses.field()
    security: ListTrustProductEvaluationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListTrustProductEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_trust_product_evaluation_response: Optional[ListTrustProductEvaluationListTrustProductEvaluationResponse] = dataclasses.field(default=None)
    
