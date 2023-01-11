import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle as shared_numbers_v2_regulatory_compliance_bundle


FETCH_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchBundlePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchBundleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchBundleRequest:
    path_params: FetchBundlePathParams = dataclasses.field()
    security: FetchBundleSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchBundleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle: Optional[shared_numbers_v2_regulatory_compliance_bundle.NumbersV2RegulatoryComplianceBundle] = dataclasses.field(default=None)
    
