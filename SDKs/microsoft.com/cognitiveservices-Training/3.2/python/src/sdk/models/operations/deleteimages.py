import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror


@dataclasses.dataclass
class DeleteImagesPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesQueryParams:
    all_images: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allImages', 'style': 'form', 'explode': True }})
    all_iterations: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allIterations', 'style': 'form', 'explode': True }})
    image_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imageIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesRequest:
    path_params: DeleteImagesPathParams = dataclasses.field()
    query_params: DeleteImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    
