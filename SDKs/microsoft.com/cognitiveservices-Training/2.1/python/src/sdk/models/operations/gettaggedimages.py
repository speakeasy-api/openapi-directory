import dataclasses
from typing import Optional
from enum import Enum
from ..shared import image as shared_image


@dataclasses.dataclass
class GetTaggedImagesPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetTaggedImagesOrderByEnum(str, Enum):
    NEWEST = "Newest"
    OLDEST = "Oldest"


@dataclasses.dataclass
class GetTaggedImagesQueryParams:
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    order_by: Optional[GetTaggedImagesOrderByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    take: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTaggedImagesHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTaggedImagesRequest:
    headers: GetTaggedImagesHeaders = dataclasses.field()
    path_params: GetTaggedImagesPathParams = dataclasses.field()
    query_params: GetTaggedImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTaggedImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None)
    
