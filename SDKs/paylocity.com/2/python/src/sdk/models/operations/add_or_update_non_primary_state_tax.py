import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import nonprimarystatetax as shared_nonprimarystatetax
from ..shared import error as shared_error


@dataclasses.dataclass
class AddOrUpdateNonPrimaryStateTaxPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddOrUpdateNonPrimaryStateTaxSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddOrUpdateNonPrimaryStateTaxRequest:
    path_params: AddOrUpdateNonPrimaryStateTaxPathParams = dataclasses.field()
    request: shared_nonprimarystatetax.NonPrimaryStateTax = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddOrUpdateNonPrimaryStateTaxSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddOrUpdateNonPrimaryStateTaxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
