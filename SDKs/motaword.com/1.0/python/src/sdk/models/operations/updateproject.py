import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error as shared_error
from ..shared import project as shared_project


@dataclasses.dataclass
class UpdateProjectPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateProjectRequestBody:
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'callback_url' }})
    coupon_code: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'coupon_code' }})
    custom: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'custom', 'json': True }})
    source_language: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'source_language' }})
    target_languages_: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'target_languages[]', 'json': True }})
    

@dataclasses.dataclass
class UpdateProjectRequest:
    path_params: UpdateProjectPathParams = dataclasses.field()
    request: Optional[UpdateProjectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
