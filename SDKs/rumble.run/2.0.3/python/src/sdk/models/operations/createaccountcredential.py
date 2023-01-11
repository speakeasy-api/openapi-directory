import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import credentialoptions as shared_credentialoptions
from ..shared import credential as shared_credential


@dataclasses.dataclass
class CreateAccountCredentialSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateAccountCredentialRequest:
    request: shared_credentialoptions.CredentialOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountCredentialSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAccountCredentialResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credential: Optional[shared_credential.Credential] = dataclasses.field(default=None)
    
