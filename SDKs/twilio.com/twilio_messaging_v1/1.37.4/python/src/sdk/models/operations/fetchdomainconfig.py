import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_domain_config as shared_messaging_v1_domain_config


FETCH_DOMAIN_CONFIG_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchDomainConfigPathParams:
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchDomainConfigSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchDomainConfigRequest:
    path_params: FetchDomainConfigPathParams = dataclasses.field()
    security: FetchDomainConfigSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchDomainConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_domain_config: Optional[shared_messaging_v1_domain_config.MessagingV1DomainConfig] = dataclasses.field(default=None)
    
