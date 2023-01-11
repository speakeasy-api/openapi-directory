import dataclasses
from typing import Optional
from ..shared import computervisionerror as shared_computervisionerror
from ..shared import readoperationresult as shared_readoperationresult


@dataclasses.dataclass
class GetReadOperationResultPathParams:
    operation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'operationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReadOperationResultRequest:
    path_params: GetReadOperationResultPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReadOperationResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    computer_vision_error: Optional[shared_computervisionerror.ComputerVisionError] = dataclasses.field(default=None)
    read_operation_result: Optional[shared_readoperationresult.ReadOperationResult] = dataclasses.field(default=None)
    
