import dataclasses
from typing import Optional
from ..shared import imageurl as shared_imageurl
from ..shared import imageprediction as shared_imageprediction


@dataclasses.dataclass
class QuickTestImageURLPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuickTestImageURLQueryParams:
    iteration_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iterationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class QuickTestImageURLHeaders:
    training_key: str = dataclasses.field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuickTestImageURLRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    image_url: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    image_url2: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class QuickTestImageURLRequest:
    headers: QuickTestImageURLHeaders = dataclasses.field()
    path_params: QuickTestImageURLPathParams = dataclasses.field()
    query_params: QuickTestImageURLQueryParams = dataclasses.field()
    request: QuickTestImageURLRequests = dataclasses.field()
    

@dataclasses.dataclass
class QuickTestImageURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_prediction: Optional[shared_imageprediction.ImagePrediction] = dataclasses.field(default=None)
    
