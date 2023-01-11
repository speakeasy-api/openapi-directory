import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import project as shared_project


@dataclasses.dataclass
class ImportProjectQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ImportProjectRequest:
    query_params: ImportProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ImportProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
