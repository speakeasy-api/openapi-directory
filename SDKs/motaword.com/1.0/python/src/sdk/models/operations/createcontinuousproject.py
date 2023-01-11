import dataclasses
from typing import Optional
from ..shared import continuousproject as shared_continuousproject


@dataclasses.dataclass
class CreateContinuousProjectRequest:
    request: Optional[shared_continuousproject.ContinuousProject] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateContinuousProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    continuous_project: Optional[shared_continuousproject.ContinuousProject] = dataclasses.field(default=None)
    
