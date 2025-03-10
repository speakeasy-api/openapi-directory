from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchEndUserPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEndUserRequest:
    path_params: FetchEndUserPathParams = field()
    security: FetchEndUserSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEndUserResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_end_user: Optional[shared.NumbersV2RegulatoryComplianceEndUser] = field(default=None)
    
