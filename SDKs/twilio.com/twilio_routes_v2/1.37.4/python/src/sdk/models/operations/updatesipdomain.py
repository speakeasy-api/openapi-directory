import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import routes_v2_sip_domain as shared_routes_v2_sip_domain


UPDATE_SIP_DOMAIN_SERVERS = [
	"https://routes.twilio.com",
]


@dataclasses.dataclass
class UpdateSipDomainPathParams:
    sip_domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SipDomain', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSipDomainUpdateSipDomainRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    voice_region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceRegion' }})
    

@dataclasses.dataclass
class UpdateSipDomainSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSipDomainRequest:
    path_params: UpdateSipDomainPathParams = dataclasses.field()
    security: UpdateSipDomainSecurity = dataclasses.field()
    request: Optional[UpdateSipDomainUpdateSipDomainRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSipDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    routes_v2_sip_domain: Optional[shared_routes_v2_sip_domain.RoutesV2SipDomain] = dataclasses.field(default=None)
    
