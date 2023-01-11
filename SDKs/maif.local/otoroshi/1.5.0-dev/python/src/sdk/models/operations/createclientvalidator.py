import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import validationauthority as shared_validationauthority


@dataclasses.dataclass
class CreateClientValidatorSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateClientValidatorRequest:
    security: CreateClientValidatorSecurity = dataclasses.field()
    request: Optional[shared_validationauthority.ValidationAuthority] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateClientValidatorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_authority: Optional[shared_validationauthority.ValidationAuthority] = dataclasses.field(default=None)
    
