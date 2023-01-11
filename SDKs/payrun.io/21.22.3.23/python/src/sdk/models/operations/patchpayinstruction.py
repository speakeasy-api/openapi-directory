import dataclasses
from typing import Optional
from ..shared import payinstruction as shared_payinstruction
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PatchPayInstructionPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_instruction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPayInstructionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPayInstructionRequest:
    headers: PatchPayInstructionHeaders = dataclasses.field()
    path_params: PatchPayInstructionPathParams = dataclasses.field()
    request: shared_payinstruction.PayInstruction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchPayInstructionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pay_instruction: Optional[shared_payinstruction.PayInstruction] = dataclasses.field(default=None)
    
