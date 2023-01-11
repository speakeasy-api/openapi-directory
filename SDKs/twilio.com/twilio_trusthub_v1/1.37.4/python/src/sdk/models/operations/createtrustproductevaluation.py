import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product_trust_product_evaluation as shared_trusthub_v1_trust_product_trust_product_evaluation


CREATE_TRUST_PRODUCT_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateTrustProductEvaluationPathParams:
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTrustProductEvaluationCreateTrustProductEvaluationRequest:
    policy_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'PolicySid' }})
    

@dataclasses.dataclass
class CreateTrustProductEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTrustProductEvaluationRequest:
    path_params: CreateTrustProductEvaluationPathParams = dataclasses.field()
    security: CreateTrustProductEvaluationSecurity = dataclasses.field()
    request: Optional[CreateTrustProductEvaluationCreateTrustProductEvaluationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTrustProductEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product_trust_product_evaluation: Optional[shared_trusthub_v1_trust_product_trust_product_evaluation.TrusthubV1TrustProductTrustProductEvaluation] = dataclasses.field(default=None)
    
