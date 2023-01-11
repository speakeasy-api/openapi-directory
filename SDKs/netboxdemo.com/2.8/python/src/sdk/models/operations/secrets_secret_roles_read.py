import dataclasses
from typing import Optional
from ..shared import secretrole as shared_secretrole


@dataclasses.dataclass
class SecretsSecretRolesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsSecretRolesReadRequest:
    path_params: SecretsSecretRolesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretsSecretRolesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret_role: Optional[shared_secretrole.SecretRole] = dataclasses.field(default=None)
    
