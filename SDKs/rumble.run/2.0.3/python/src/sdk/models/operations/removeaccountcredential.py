import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAccountCredentialPathParams:
    credential_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAccountCredentialSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveAccountCredentialRequest:
    path_params: RemoveAccountCredentialPathParams = dataclasses.field()
    security: RemoveAccountCredentialSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAccountCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
