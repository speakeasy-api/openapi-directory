import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import project_column as shared_project_column


@dataclasses.dataclass
class ProjectsGetColumnPathParams:
    column_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'column_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsGetColumnRequest:
    path_params: ProjectsGetColumnPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsGetColumnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    project_column: Optional[shared_project_column.ProjectColumn] = dataclasses.field(default=None)
    
