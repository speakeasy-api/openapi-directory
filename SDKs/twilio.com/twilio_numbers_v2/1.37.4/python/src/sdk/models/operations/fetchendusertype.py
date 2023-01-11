import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_end_user_type as shared_numbers_v2_regulatory_compliance_end_user_type


FETCH_END_USER_TYPE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchEndUserTypePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEndUserTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEndUserTypeRequest:
    path_params: FetchEndUserTypePathParams = dataclasses.field()
    security: FetchEndUserTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEndUserTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_end_user_type: Optional[shared_numbers_v2_regulatory_compliance_end_user_type.NumbersV2RegulatoryComplianceEndUserType] = dataclasses.field(default=None)
    
