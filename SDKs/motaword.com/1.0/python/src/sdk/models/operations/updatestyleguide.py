import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error as shared_error
from ..shared import styleguide as shared_styleguide


@dataclasses.dataclass
class UpdateStyleGuidePathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    style_guide_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'styleGuideId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateStyleGuideRequestBodyStyleguides:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    styleguides: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'styleguides' }})
    

@dataclasses.dataclass
class UpdateStyleGuideRequestBody:
    styleguides: UpdateStyleGuideRequestBodyStyleguides = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UpdateStyleGuideRequest:
    path_params: UpdateStyleGuidePathParams = dataclasses.field()
    request: Optional[UpdateStyleGuideRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateStyleGuideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    style_guide: Optional[shared_styleguide.StyleGuide] = dataclasses.field(default=None)
    
