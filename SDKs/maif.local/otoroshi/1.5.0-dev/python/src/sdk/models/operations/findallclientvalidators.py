import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import validationauthority as shared_validationauthority


@dataclasses.dataclass
class FindAllClientValidatorsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindAllClientValidatorsRequest:
    security: FindAllClientValidatorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindAllClientValidatorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_authorities: Optional[list[shared_validationauthority.ValidationAuthority]] = dataclasses.field(default=None)
    
