import dataclasses
from typing import Optional
from ..shared import iteration as shared_iteration


@dataclasses.dataclass
class TrainProjectPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrainProjectHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TrainProjectRequest:
    headers: TrainProjectHeaders = dataclasses.field()
    path_params: TrainProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TrainProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    iteration: Optional[shared_iteration.Iteration] = dataclasses.field(default=None)
    
