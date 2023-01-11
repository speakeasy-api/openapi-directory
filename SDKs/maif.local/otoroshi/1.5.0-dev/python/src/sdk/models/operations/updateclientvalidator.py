import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import validationauthority as shared_validationauthority


@dataclasses.dataclass
class UpdateClientValidatorPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateClientValidatorSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateClientValidatorRequest:
    path_params: UpdateClientValidatorPathParams = dataclasses.field()
    security: UpdateClientValidatorSecurity = dataclasses.field()
    request: Optional[shared_validationauthority.ValidationAuthority] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateClientValidatorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    validation_authority: Optional[shared_validationauthority.ValidationAuthority] = dataclasses.field(default=None)
    
