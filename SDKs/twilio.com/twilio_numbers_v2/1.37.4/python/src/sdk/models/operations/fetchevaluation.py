import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle_evaluation as shared_numbers_v2_regulatory_compliance_bundle_evaluation


FETCH_EVALUATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchEvaluationPathParams:
    bundle_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEvaluationRequest:
    path_params: FetchEvaluationPathParams = dataclasses.field()
    security: FetchEvaluationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle_evaluation: Optional[shared_numbers_v2_regulatory_compliance_bundle_evaluation.NumbersV2RegulatoryComplianceBundleEvaluation] = dataclasses.field(default=None)
    
