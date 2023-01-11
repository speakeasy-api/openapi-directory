import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import projectexport as shared_projectexport


@dataclasses.dataclass
class ExportProjectPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportProjectRequest:
    path_params: ExportProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExportProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    project_export: Optional[shared_projectexport.ProjectExport] = dataclasses.field(default=None)
    
