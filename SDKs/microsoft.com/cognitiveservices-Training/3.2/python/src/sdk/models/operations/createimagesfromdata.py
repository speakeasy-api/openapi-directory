import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import imagecreatesummary as shared_imagecreatesummary


@dataclasses.dataclass
class CreateImagesFromDataPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateImagesFromDataQueryParams:
    tag_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class CreateImagesFromDataRequestBodyImageData:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_data: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclasses.dataclass
class CreateImagesFromDataRequestBody:
    image_data: CreateImagesFromDataRequestBodyImageData = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class CreateImagesFromDataRequest:
    path_params: CreateImagesFromDataPathParams = dataclasses.field()
    query_params: CreateImagesFromDataQueryParams = dataclasses.field()
    request: CreateImagesFromDataRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateImagesFromDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    image_create_summary: Optional[shared_imagecreatesummary.ImageCreateSummary] = dataclasses.field(default=None)
    
