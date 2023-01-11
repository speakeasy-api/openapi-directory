import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile_customer_profile_evaluation as shared_trusthub_v1_customer_profile_customer_profile_evaluation


FETCH_CUSTOMER_PROFILE_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchCustomerProfileEvaluationPathParams:
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCustomerProfileEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCustomerProfileEvaluationRequest:
    path_params: FetchCustomerProfileEvaluationPathParams = dataclasses.field()
    security: FetchCustomerProfileEvaluationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCustomerProfileEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_customer_profile_customer_profile_evaluation: Optional[shared_trusthub_v1_customer_profile_customer_profile_evaluation.TrusthubV1CustomerProfileCustomerProfileEvaluation] = dataclasses.field(default=None)
    
