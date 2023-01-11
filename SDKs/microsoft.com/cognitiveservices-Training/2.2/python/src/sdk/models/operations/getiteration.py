import dataclasses
from typing import Optional
from ..shared import iteration as shared_iteration


@dataclasses.dataclass
class GetIterationPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIterationHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIterationRequest:
    headers: GetIterationHeaders = dataclasses.field()
    path_params: GetIterationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIterationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    iteration: Optional[shared_iteration.Iteration] = dataclasses.field(default=None)
    
