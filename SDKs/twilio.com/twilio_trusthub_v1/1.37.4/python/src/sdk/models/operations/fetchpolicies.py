import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_policies as shared_trusthub_v1_policies


FETCH_POLICIES_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class FetchPoliciesPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchPoliciesSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchPoliciesRequest:
    path_params: FetchPoliciesPathParams = dataclasses.field()
    security: FetchPoliciesSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_policies: Optional[shared_trusthub_v1_policies.TrusthubV1Policies] = dataclasses.field(default=None)
    
