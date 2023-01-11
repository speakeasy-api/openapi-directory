import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class ProjectsDeleteColumnPathParams:
    column_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsDeleteColumnRequest:
    path_params: ProjectsDeleteColumnPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsDeleteColumnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
