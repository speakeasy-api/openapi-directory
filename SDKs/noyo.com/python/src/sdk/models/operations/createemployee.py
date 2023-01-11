import dataclasses
from typing import Optional
from ..shared import employeecreaterequest as shared_employeecreaterequest
from ..shared import employeeresult as shared_employeeresult


@dataclasses.dataclass
class CreateEmployeePathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEmployeeRequest:
    path_params: CreateEmployeePathParams = dataclasses.field()
    request: shared_employeecreaterequest.EmployeeCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee_result: Optional[shared_employeeresult.EmployeeResult] = dataclasses.field(default=None)
    
