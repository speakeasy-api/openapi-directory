import dataclasses
from typing import Optional
from ..shared import computervisionerror as shared_computervisionerror
from ..shared import textoperationresult as shared_textoperationresult


@dataclasses.dataclass
class GetTextOperationResultPathParams:
    operation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'operationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTextOperationResultRequest:
    path_params: GetTextOperationResultPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTextOperationResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    computer_vision_error: Optional[shared_computervisionerror.ComputerVisionError] = dataclasses.field(default=None)
    text_operation_result: Optional[shared_textoperationresult.TextOperationResult] = dataclasses.field(default=None)
    
