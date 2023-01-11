import dataclasses
from typing import Optional
from ..shared import imageprediction as shared_imageprediction


@dataclasses.dataclass
class PredictImagePathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PredictImageQueryParams:
    application: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PredictImageHeaders:
    prediction_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Prediction-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PredictImageRequestBodyImageData:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_data: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclasses.dataclass
class PredictImageRequestBody:
    image_data: PredictImageRequestBodyImageData = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PredictImageRequest:
    headers: PredictImageHeaders = dataclasses.field()
    path_params: PredictImagePathParams = dataclasses.field()
    query_params: PredictImageQueryParams = dataclasses.field()
    request: PredictImageRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PredictImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_prediction: Optional[shared_imageprediction.ImagePrediction] = dataclasses.field(default=None)
    
