import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import validationauthority as shared_validationauthority


@dataclasses.dataclass
class FindClientValidatorByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindClientValidatorByIDSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindClientValidatorByIDRequest:
    path_params: FindClientValidatorByIDPathParams = dataclasses.field()
    security: FindClientValidatorByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindClientValidatorByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_authority: Optional[shared_validationauthority.ValidationAuthority] = dataclasses.field(default=None)
    
