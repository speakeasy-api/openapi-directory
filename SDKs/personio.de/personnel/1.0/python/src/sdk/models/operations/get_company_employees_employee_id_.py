import dataclasses
from typing import Optional
from ..shared import employeeresponse as shared_employeeresponse


@dataclasses.dataclass
class GetCompanyEmployeesEmployeeIDPathParams:
    employee_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompanyEmployeesEmployeeIDRequest:
    path_params: GetCompanyEmployeesEmployeeIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCompanyEmployeesEmployeeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee_response: Optional[shared_employeeresponse.EmployeeResponse] = dataclasses.field(default=None)
    
