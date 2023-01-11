import dataclasses
from typing import Optional
from enum import Enum
from ..shared import error as shared_error
from ..shared import styleguide as shared_styleguide


@dataclasses.dataclass
class GetStyleGuidePathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    style_guide_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'styleGuideId', 'style': 'simple', 'explode': False }})
    
class GetStyleGuideWithEnum(str, Enum):
    PREVIEW = "preview"


@dataclasses.dataclass
class GetStyleGuideQueryParams:
    with_: Optional[list[GetStyleGuideWithEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStyleGuideRequest:
    path_params: GetStyleGuidePathParams = dataclasses.field()
    query_params: GetStyleGuideQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStyleGuideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    style_guide: Optional[shared_styleguide.StyleGuide] = dataclasses.field(default=None)
    
