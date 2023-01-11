import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class DeleteEntityPathParams:
    identity: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEntitySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteEntityRequest:
    path_params: DeleteEntityPathParams = dataclasses.field()
    security: DeleteEntitySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteEntityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
