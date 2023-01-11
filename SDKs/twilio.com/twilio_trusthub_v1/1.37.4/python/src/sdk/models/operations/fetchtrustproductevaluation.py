import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_trust_product_trust_product_evaluation as shared_trusthub_v1_trust_product_trust_product_evaluation


FETCH_TRUST_PRODUCT_EVALUATION_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchTrustProductEvaluationPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trust_product_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrustProductSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTrustProductEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTrustProductEvaluationRequest:
    path_params: FetchTrustProductEvaluationPathParams = dataclasses.field()
    security: FetchTrustProductEvaluationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTrustProductEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_trust_product_trust_product_evaluation: Optional[shared_trusthub_v1_trust_product_trust_product_evaluation.TrusthubV1TrustProductTrustProductEvaluation] = dataclasses.field(default=None)
    
