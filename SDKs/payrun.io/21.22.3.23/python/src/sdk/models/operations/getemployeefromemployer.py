import dataclasses
from typing import Optional
from ..shared import employee as shared_employee
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetEmployeeFromEmployerPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeFromEmployerRequest:
    headers: GetEmployeeFromEmployerHeaders = dataclasses.field()
    path_params: GetEmployeeFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployeeFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee: Optional[shared_employee.Employee] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
