import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_regulation as shared_numbers_v2_regulatory_compliance_regulation


FETCH_REGULATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchRegulationPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchRegulationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchRegulationRequest:
    path_params: FetchRegulationPathParams = dataclasses.field()
    security: FetchRegulationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchRegulationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_regulation: Optional[shared_numbers_v2_regulatory_compliance_regulation.NumbersV2RegulatoryComplianceRegulation] = dataclasses.field(default=None)
    
