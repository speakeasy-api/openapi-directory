import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import continuousprojectupdatecontent as shared_continuousprojectupdatecontent
from ..shared import continuousproject as shared_continuousproject
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateContinuousProjectPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateContinuousProjectRequest:
    path_params: UpdateContinuousProjectPathParams = dataclasses.field()
    request: Optional[shared_continuousprojectupdatecontent.ContinuousProjectUpdateContent] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateContinuousProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    continuous_project: Optional[shared_continuousproject.ContinuousProject] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
