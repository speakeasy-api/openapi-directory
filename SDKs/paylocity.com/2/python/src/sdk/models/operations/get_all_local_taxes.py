import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import localtax as shared_localtax


@dataclasses.dataclass
class GetAllLocalTaxesPathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllLocalTaxesSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllLocalTaxesRequest:
    path_params: GetAllLocalTaxesPathParams = dataclasses.field()
    security: GetAllLocalTaxesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllLocalTaxesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    local_taxes: Optional[list[shared_localtax.LocalTax]] = dataclasses.field(default=None)
    
