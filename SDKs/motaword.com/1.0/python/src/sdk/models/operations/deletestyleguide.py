import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class DeleteStyleGuidePathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    style_guide_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'styleGuideId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteStyleGuideRequest:
    path_params: DeleteStyleGuidePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteStyleGuideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
