import dataclasses
from typing import Optional
from ..shared import imagepredictionresultmodel as shared_imagepredictionresultmodel


@dataclasses.dataclass
class PredictImageWithNoStorePathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PredictImageWithNoStoreQueryParams:
    application: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PredictImageWithNoStoreHeaders:
    prediction_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Prediction-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PredictImageWithNoStoreRequestBodyImageData:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_data: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageData' }})
    

@dataclasses.dataclass
class PredictImageWithNoStoreRequestBody:
    image_data: PredictImageWithNoStoreRequestBodyImageData = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PredictImageWithNoStoreRequest:
    headers: PredictImageWithNoStoreHeaders = dataclasses.field()
    path_params: PredictImageWithNoStorePathParams = dataclasses.field()
    query_params: PredictImageWithNoStoreQueryParams = dataclasses.field()
    request: PredictImageWithNoStoreRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PredictImageWithNoStoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_prediction_result_model: Optional[shared_imagepredictionresultmodel.ImagePredictionResultModel] = dataclasses.field(default=None)
    
