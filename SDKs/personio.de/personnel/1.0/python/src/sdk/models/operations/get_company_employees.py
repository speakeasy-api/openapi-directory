import dataclasses
from typing import Optional
from ..shared import employeesresponse as shared_employeesresponse


@dataclasses.dataclass
class GetCompanyEmployeesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employees_response: Optional[shared_employeesresponse.EmployeesResponse] = dataclasses.field(default=None)
    
