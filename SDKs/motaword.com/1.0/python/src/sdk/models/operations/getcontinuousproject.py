import dataclasses
from typing import Optional
from ..shared import continuousproject as shared_continuousproject
from ..shared import error as shared_error


@dataclasses.dataclass
class GetContinuousProjectPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContinuousProjectRequest:
    path_params: GetContinuousProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetContinuousProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    continuous_project: Optional[shared_continuousproject.ContinuousProject] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
