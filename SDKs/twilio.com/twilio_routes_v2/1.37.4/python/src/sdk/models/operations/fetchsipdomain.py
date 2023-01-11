import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import routes_v2_sip_domain as shared_routes_v2_sip_domain


FETCH_SIP_DOMAIN_SERVERS = [
	"https://routes.twilio.com",
]


@dataclasses.dataclass
class FetchSipDomainPathParams:
    sip_domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SipDomain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSipDomainSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSipDomainRequest:
    path_params: FetchSipDomainPathParams = dataclasses.field()
    security: FetchSipDomainSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSipDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    routes_v2_sip_domain: Optional[shared_routes_v2_sip_domain.RoutesV2SipDomain] = dataclasses.field(default=None)
    
