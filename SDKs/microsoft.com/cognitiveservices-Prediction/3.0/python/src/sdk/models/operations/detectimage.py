import dataclasses
from typing import Optional
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import imageprediction as shared_imageprediction


@dataclasses.dataclass
class DetectImagePathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    published_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'publishedName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DetectImageQueryParams:
    application: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DetectImageRequestBodyImageData:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_data: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclasses.dataclass
class DetectImageRequestBody:
    image_data: DetectImageRequestBodyImageData = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class DetectImageRequest:
    path_params: DetectImagePathParams = dataclasses.field()
    query_params: DetectImageQueryParams = dataclasses.field()
    request: DetectImageRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class DetectImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    image_prediction: Optional[shared_imageprediction.ImagePrediction] = dataclasses.field(default=None)
    
