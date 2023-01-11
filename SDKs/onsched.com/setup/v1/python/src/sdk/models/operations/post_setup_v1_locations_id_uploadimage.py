import dataclasses
from typing import Optional
from ..shared import resourceimageinputmodel as shared_resourceimageinputmodel
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class PostSetupV1LocationsIDUploadimagePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDUploadimageRequests:
    resource_image_input_model: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_image_input_model1: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_image_input_model2: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_image_input_model3: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDUploadimageRequest:
    path_params: PostSetupV1LocationsIDUploadimagePathParams = dataclasses.field()
    request: Optional[PostSetupV1LocationsIDUploadimageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1LocationsIDUploadimageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
