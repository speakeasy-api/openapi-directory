import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import employee as shared_employee
from ..shared import error as shared_error


@dataclasses.dataclass
class GetEmployeePathParams:
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employeeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeSecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEmployeeRequest:
    path_params: GetEmployeePathParams = dataclasses.field()
    security: GetEmployeeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employees: Optional[list[shared_employee.Employee]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
