import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity_factor as shared_verify_v2_service_entity_factor


FETCH_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchFactorPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFactorSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFactorRequest:
    path_params: FetchFactorPathParams = dataclasses.field()
    security: FetchFactorSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFactorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity_factor: Optional[shared_verify_v2_service_entity_factor.VerifyV2ServiceEntityFactor] = dataclasses.field(default=None)
    
