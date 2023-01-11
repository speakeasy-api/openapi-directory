import dataclasses
from typing import Optional
from ..shared import project as shared_project


@dataclasses.dataclass
class ProjectsReadPathParams:
    project_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsReadRequest:
    path_params: ProjectsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
