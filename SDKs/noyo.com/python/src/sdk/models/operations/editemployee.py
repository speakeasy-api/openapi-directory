import dataclasses
from typing import Optional
from ..shared import employeeeditrequest as shared_employeeeditrequest
from ..shared import employeeresult as shared_employeeresult


@dataclasses.dataclass
class EditEmployeePathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditEmployeeRequest:
    path_params: EditEmployeePathParams = dataclasses.field()
    request: shared_employeeeditrequest.EmployeeEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee_result: Optional[shared_employeeresult.EmployeeResult] = dataclasses.field(default=None)
    
