import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import styleguidelist as shared_styleguidelist


@dataclasses.dataclass
class CreateStyleGuidePathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateStyleGuideRequestBodyStyleguides:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    styleguides_: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'styleguides[]' }})
    

@dataclasses.dataclass
class CreateStyleGuideRequestBody:
    styleguides_: CreateStyleGuideRequestBodyStyleguides = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class CreateStyleGuideRequest:
    path_params: CreateStyleGuidePathParams = dataclasses.field()
    request: Optional[CreateStyleGuideRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateStyleGuideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    style_guide_list: Optional[shared_styleguidelist.StyleGuideList] = dataclasses.field(default=None)
    
