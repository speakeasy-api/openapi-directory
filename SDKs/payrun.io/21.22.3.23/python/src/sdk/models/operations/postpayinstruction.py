import dataclasses
from typing import Optional
from ..shared import payinstruction as shared_payinstruction
from ..shared import errormodel as shared_errormodel
from ..shared import link as shared_link


@dataclasses.dataclass
class PostPayInstructionPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPayInstructionHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPayInstructionRequest:
    headers: PostPayInstructionHeaders = dataclasses.field()
    path_params: PostPayInstructionPathParams = dataclasses.field()
    request: shared_payinstruction.PayInstruction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPayInstructionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    link: Optional[shared_link.Link] = dataclasses.field(default=None)
    
