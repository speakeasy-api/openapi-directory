import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_domain as shared_api_v2010_account_sip_sip_domain


FETCH_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchSipDomainPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

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
    api_v2010_account_sip_sip_domain: Optional[shared_api_v2010_account_sip_sip_domain.APIV2010AccountSipSipDomain] = dataclasses.field(default=None)
    
