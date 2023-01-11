import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import localtax as shared_localtax
from ..shared import error as shared_error


@dataclasses.dataclass
class AddLocalTaxPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddLocalTaxSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddLocalTaxRequest:
    path_params: AddLocalTaxPathParams = dataclasses.field()
    request: shared_localtax.LocalTax = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddLocalTaxSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddLocalTaxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
