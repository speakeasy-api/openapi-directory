import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle_evaluation as shared_numbers_v2_regulatory_compliance_bundle_evaluation


CREATE_EVALUATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class CreateEvaluationPathParams:
    bundle_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEvaluationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateEvaluationRequest:
    path_params: CreateEvaluationPathParams = dataclasses.field()
    security: CreateEvaluationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEvaluationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle_evaluation: Optional[shared_numbers_v2_regulatory_compliance_bundle_evaluation.NumbersV2RegulatoryComplianceBundleEvaluation] = dataclasses.field(default=None)
    
