import dataclasses
from typing import Optional
from ..shared import imageurl as shared_imageurl
from ..shared import imagepredictionresultmodel as shared_imagepredictionresultmodel


@dataclasses.dataclass
class PredictImageURLPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PredictImageURLQueryParams:
    application: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PredictImageURLHeaders:
    prediction_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Prediction-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PredictImageURLRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    image_url: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    image_url2: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PredictImageURLRequest:
    headers: PredictImageURLHeaders = dataclasses.field()
    path_params: PredictImageURLPathParams = dataclasses.field()
    query_params: PredictImageURLQueryParams = dataclasses.field()
    request: PredictImageURLRequests = dataclasses.field()
    

@dataclasses.dataclass
class PredictImageURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_prediction_result_model: Optional[shared_imagepredictionresultmodel.ImagePredictionResultModel] = dataclasses.field(default=None)
    
