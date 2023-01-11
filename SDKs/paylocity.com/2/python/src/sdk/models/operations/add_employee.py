import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import employee as shared_employee
from ..shared import employeeidresponse as shared_employeeidresponse
from ..shared import error as shared_error


@dataclasses.dataclass
class AddEmployeePathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddEmployeeSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddEmployeeRequest:
    path_params: AddEmployeePathParams = dataclasses.field()
    request: shared_employee.Employee = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddEmployeeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee_id_responses: Optional[list[shared_employeeidresponse.EmployeeIDResponse]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
