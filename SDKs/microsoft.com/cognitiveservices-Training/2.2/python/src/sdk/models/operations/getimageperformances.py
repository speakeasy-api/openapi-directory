import dataclasses
from typing import Optional
from enum import Enum
from ..shared import imageperformance as shared_imageperformance


@dataclasses.dataclass
class GetImagePerformancesPathParams:
    iteration_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetImagePerformancesOrderByEnum(str, Enum):
    NEWEST = "Newest"
    OLDEST = "Oldest"


@dataclasses.dataclass
class GetImagePerformancesQueryParams:
    order_by: Optional[GetImagePerformancesOrderByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    take: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImagePerformancesHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetImagePerformancesRequest:
    headers: GetImagePerformancesHeaders = dataclasses.field()
    path_params: GetImagePerformancesPathParams = dataclasses.field()
    query_params: GetImagePerformancesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagePerformancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_performances: Optional[list[shared_imageperformance.ImagePerformance]] = dataclasses.field(default=None)
    
