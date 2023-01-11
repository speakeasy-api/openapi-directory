import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile_customer_profile_evaluation as shared_trusthub_v1_customer_profile_customer_profile_evaluation


CREATE_CUSTOMER_PROFILE_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateCustomerProfileEvaluationPathParams:
    customer_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CustomerProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest:
    policy_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'PolicySid' }})
    

@dataclasses.dataclass
class CreateCustomerProfileEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCustomerProfileEvaluationRequest:
    path_params: CreateCustomerProfileEvaluationPathParams = dataclasses.field()
    security: CreateCustomerProfileEvaluationSecurity = dataclasses.field()
    request: Optional[CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCustomerProfileEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_customer_profile_customer_profile_evaluation: Optional[shared_trusthub_v1_customer_profile_customer_profile_evaluation.TrusthubV1CustomerProfileCustomerProfileEvaluation] = dataclasses.field(default=None)
    
