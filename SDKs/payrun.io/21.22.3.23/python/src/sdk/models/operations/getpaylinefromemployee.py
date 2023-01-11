import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import payline as shared_payline


@dataclasses.dataclass
class GetPayLineFromEmployeePathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_line_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayLineId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayLineFromEmployeeHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayLineFromEmployeeRequest:
    headers: GetPayLineFromEmployeeHeaders = dataclasses.field()
    path_params: GetPayLineFromEmployeePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayLineFromEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pay_line: Optional[shared_payline.PayLine] = dataclasses.field(default=None)
    
