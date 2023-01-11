import dataclasses
from typing import Optional
from ..shared import imageurl as shared_imageurl
from ..shared import customvisionerror as shared_customvisionerror
from ..shared import imageprediction as shared_imageprediction


@dataclasses.dataclass
class ClassifyImageURLWithNoStorePathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    published_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'publishedName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClassifyImageURLWithNoStoreQueryParams:
    application: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClassifyImageURLWithNoStoreRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})
    image_url: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_url1: Optional[shared_imageurl.ImageURL] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ClassifyImageURLWithNoStoreRequest:
    path_params: ClassifyImageURLWithNoStorePathParams = dataclasses.field()
    query_params: ClassifyImageURLWithNoStoreQueryParams = dataclasses.field()
    request: ClassifyImageURLWithNoStoreRequests = dataclasses.field()
    

@dataclasses.dataclass
class ClassifyImageURLWithNoStoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    custom_vision_error: Optional[shared_customvisionerror.CustomVisionError] = dataclasses.field(default=None)
    image_prediction: Optional[shared_imageprediction.ImagePrediction] = dataclasses.field(default=None)
    
