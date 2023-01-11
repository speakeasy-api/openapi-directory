import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import secretrole as shared_secretrole
from ..shared import secretrole as shared_secretrole


@dataclasses.dataclass
class SecretsSecretRolesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SecretsSecretRolesPartialUpdateRequest:
    path_params: SecretsSecretRolesPartialUpdatePathParams = dataclasses.field()
    request: shared_secretrole.SecretRoleInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SecretsSecretRolesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secret_role: Optional[shared_secretrole.SecretRole] = dataclasses.field(default=None)
    
