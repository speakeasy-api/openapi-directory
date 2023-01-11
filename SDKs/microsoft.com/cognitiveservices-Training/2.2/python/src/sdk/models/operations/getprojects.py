import dataclasses
from typing import Optional
from ..shared import project as shared_project


@dataclasses.dataclass
class GetProjectsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectsRequest:
    headers: GetProjectsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    
