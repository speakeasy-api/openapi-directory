import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class DeleteLocalTaxByTaxCodePathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    tax_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLocalTaxByTaxCodeSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteLocalTaxByTaxCodeRequest:
    path_params: DeleteLocalTaxByTaxCodePathParams = dataclasses.field()
    security: DeleteLocalTaxByTaxCodeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLocalTaxByTaxCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
