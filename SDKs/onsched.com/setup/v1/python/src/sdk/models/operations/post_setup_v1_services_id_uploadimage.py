import dataclasses
from typing import Optional
from ..shared import serviceimageinputmodel as shared_serviceimageinputmodel
from ..shared import serviceviewmodel as shared_serviceviewmodel


@dataclasses.dataclass
class PostSetupV1ServicesIDUploadimagePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDUploadimageRequests:
    service_image_input_model: Optional[shared_serviceimageinputmodel.ServiceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_image_input_model1: Optional[shared_serviceimageinputmodel.ServiceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_image_input_model2: Optional[shared_serviceimageinputmodel.ServiceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_image_input_model3: Optional[shared_serviceimageinputmodel.ServiceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDUploadimageRequest:
    path_params: PostSetupV1ServicesIDUploadimagePathParams = dataclasses.field()
    request: Optional[PostSetupV1ServicesIDUploadimageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ServicesIDUploadimageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_view_model: Optional[shared_serviceviewmodel.ServiceViewModel] = dataclasses.field(default=None)
    
