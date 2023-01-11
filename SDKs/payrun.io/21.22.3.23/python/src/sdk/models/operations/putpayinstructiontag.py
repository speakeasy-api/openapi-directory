import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import tag as shared_tag


@dataclasses.dataclass
class PutPayInstructionTagPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_instruction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayInstructionId', 'style': 'simple', 'explode': False }})
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPayInstructionTagHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPayInstructionTagRequest:
    headers: PutPayInstructionTagHeaders = dataclasses.field()
    path_params: PutPayInstructionTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutPayInstructionTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
