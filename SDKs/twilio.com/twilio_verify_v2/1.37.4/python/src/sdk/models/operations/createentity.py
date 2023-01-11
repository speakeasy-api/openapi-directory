import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import verify_v2_service_entity as shared_verify_v2_service_entity


CREATE_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateEntityPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEntityCreateEntityRequest:
    identity: str = dataclasses.field(metadata={'form': { 'field_name': 'Identity' }})
    

@dataclasses.dataclass
class CreateEntitySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateEntityRequest:
    path_params: CreateEntityPathParams = dataclasses.field()
    security: CreateEntitySecurity = dataclasses.field()
    request: Optional[CreateEntityCreateEntityRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_entity: Optional[shared_verify_v2_service_entity.VerifyV2ServiceEntity] = dataclasses.field(default=None)
    
