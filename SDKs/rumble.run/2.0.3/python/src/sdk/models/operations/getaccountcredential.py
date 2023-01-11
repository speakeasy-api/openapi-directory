import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import credential as shared_credential


@dataclasses.dataclass
class GetAccountCredentialPathParams:
    credential_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'credential_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountCredentialSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountCredentialRequest:
    path_params: GetAccountCredentialPathParams = dataclasses.field()
    security: GetAccountCredentialSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credential: Optional[shared_credential.Credential] = dataclasses.field(default=None)
    
