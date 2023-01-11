import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteProjectPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectRequest:
    path_params: DeleteProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
