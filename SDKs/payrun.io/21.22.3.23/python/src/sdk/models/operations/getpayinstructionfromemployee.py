import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import payinstruction as shared_payinstruction


@dataclasses.dataclass
class GetPayInstructionFromEmployeePathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_instruction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayInstructionFromEmployeeHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayInstructionFromEmployeeRequest:
    headers: GetPayInstructionFromEmployeeHeaders = dataclasses.field()
    path_params: GetPayInstructionFromEmployeePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayInstructionFromEmployeeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pay_instruction: Optional[shared_payinstruction.PayInstruction] = dataclasses.field(default=None)
    
