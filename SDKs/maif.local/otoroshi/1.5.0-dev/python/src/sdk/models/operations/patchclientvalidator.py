import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import validationauthority as shared_validationauthority


@dataclasses.dataclass
class PatchClientValidatorPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchClientValidatorSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchClientValidatorRequest:
    path_params: PatchClientValidatorPathParams = dataclasses.field()
    security: PatchClientValidatorSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchClientValidatorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_authority: Optional[shared_validationauthority.ValidationAuthority] = dataclasses.field(default=None)
    
