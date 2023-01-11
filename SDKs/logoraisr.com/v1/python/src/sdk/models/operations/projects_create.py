import dataclasses
from typing import Optional
from ..shared import projectrequest as shared_projectrequest
from ..shared import projectresponse as shared_projectresponse


@dataclasses.dataclass
class ProjectsCreateRequest:
    request: shared_projectrequest.ProjectRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ProjectsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    project_response: Optional[shared_projectresponse.ProjectResponse] = dataclasses.field(default=None)
    
