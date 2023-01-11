import dataclasses
from typing import Optional
from ..shared import image as shared_image


@dataclasses.dataclass
class GetImagesByIdsPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetImagesByIdsQueryParams:
    image_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImagesByIdsHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetImagesByIdsRequest:
    headers: GetImagesByIdsHeaders = dataclasses.field()
    path_params: GetImagesByIdsPathParams = dataclasses.field()
    query_params: GetImagesByIdsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagesByIdsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None)
    
