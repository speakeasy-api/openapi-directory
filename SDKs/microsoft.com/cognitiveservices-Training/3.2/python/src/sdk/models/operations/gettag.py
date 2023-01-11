import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import tag as shared_tag


@dataclasses.dataclass
class GetTagPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagQueryParams:
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTagRequest:
    path_params: GetTagPathParams = dataclasses.field()
    query_params: GetTagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    tag: Optional[shared_tag.Tag] = dataclasses.field(default=None)
    
