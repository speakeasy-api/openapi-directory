import dataclasses
from typing import Optional
from ..shared import imagepredictionresult as shared_imagepredictionresult


@dataclasses.dataclass
class QuickTestImagePathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuickTestImageQueryParams:
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QuickTestImageHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuickTestImageRequestBodyImageData:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_data: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclasses.dataclass
class QuickTestImageRequestBody:
    image_data: QuickTestImageRequestBodyImageData = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class QuickTestImageRequest:
    headers: QuickTestImageHeaders = dataclasses.field()
    path_params: QuickTestImagePathParams = dataclasses.field()
    query_params: QuickTestImageQueryParams = dataclasses.field()
    request: QuickTestImageRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class QuickTestImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_prediction_result: Optional[shared_imagepredictionresult.ImagePredictionResult] = dataclasses.field(default=None)
    
