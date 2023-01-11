import dataclasses
from typing import Optional
from ..shared import iteration as shared_iteration


@dataclasses.dataclass
class GetIterationsPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIterationsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIterationsRequest:
    headers: GetIterationsHeaders = dataclasses.field()
    path_params: GetIterationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIterationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    iterations: Optional[list[shared_iteration.Iteration]] = dataclasses.field(default=None)
    
