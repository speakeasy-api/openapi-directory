import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import project as shared_project
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import project as shared_project


@dataclasses.dataclass
class UpdateProjectPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateProjectRequestsInput:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    project: Optional[shared_project.ProjectInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    project1: Optional[shared_project.ProjectInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdateProjectRequest:
    path_params: UpdateProjectPathParams = dataclasses.field()
    request: UpdateProjectRequestsInput = dataclasses.field()
    

@dataclasses.dataclass
class UpdateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
