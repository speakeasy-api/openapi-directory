import dataclasses
from typing import Optional
from ..shared import employeeresult as shared_employeeresult


@dataclasses.dataclass
class GetEmployeePathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeRequest:
    path_params: GetEmployeePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee_result: Optional[shared_employeeresult.EmployeeResult] = dataclasses.field(default=None)
    
