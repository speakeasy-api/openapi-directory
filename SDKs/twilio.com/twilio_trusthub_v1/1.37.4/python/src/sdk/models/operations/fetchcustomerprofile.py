import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile as shared_trusthub_v1_customer_profile


FETCH_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchCustomerProfilePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchCustomerProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchCustomerProfileRequest:
    path_params: FetchCustomerProfilePathParams = dataclasses.field()
    security: FetchCustomerProfileSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchCustomerProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_customer_profile: Optional[shared_trusthub_v1_customer_profile.TrusthubV1CustomerProfile] = dataclasses.field(default=None)
    
