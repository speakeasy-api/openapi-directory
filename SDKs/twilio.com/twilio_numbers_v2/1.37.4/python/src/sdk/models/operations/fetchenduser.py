import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_end_user as shared_numbers_v2_regulatory_compliance_end_user


FETCH_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class FetchEndUserPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEndUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEndUserRequest:
    path_params: FetchEndUserPathParams = dataclasses.field()
    security: FetchEndUserSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEndUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_end_user: Optional[shared_numbers_v2_regulatory_compliance_end_user.NumbersV2RegulatoryComplianceEndUser] = dataclasses.field(default=None)
    
