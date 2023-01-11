import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity as shared_verify_v2_service_entity


FETCH_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class FetchEntityPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchEntitySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchEntityRequest:
    path_params: FetchEntityPathParams = dataclasses.field()
    security: FetchEntitySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity: Optional[shared_verify_v2_service_entity.VerifyV2ServiceEntity] = dataclasses.field(default=None)
    
