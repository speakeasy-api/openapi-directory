import dataclasses
from typing import Optional
from ..shared import project as shared_project


@dataclasses.dataclass
class ProjectsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
