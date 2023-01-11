import dataclasses
from typing import Optional
from ..shared import secretrole as shared_secretrole
from ..shared import secretrole as shared_secretrole


@dataclasses.dataclass
class SecretsSecretRolesCreateRequest:
    request: shared_secretrole.SecretRoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SecretsSecretRolesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret_role: Optional[shared_secretrole.SecretRole] = dataclasses.field(default=None)
    
