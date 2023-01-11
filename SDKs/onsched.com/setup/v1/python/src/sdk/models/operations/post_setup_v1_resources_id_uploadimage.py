import dataclasses
from typing import Optional
from ..shared import resourceimageinputmodel as shared_resourceimageinputmodel
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PostSetupV1ResourcesIDUploadimagePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDUploadimageRequests:
    resource_image_input_model: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_image_input_model1: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_image_input_model2: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_image_input_model3: Optional[shared_resourceimageinputmodel.ResourceImageInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDUploadimageRequest:
    path_params: PostSetupV1ResourcesIDUploadimagePathParams = dataclasses.field()
    request: Optional[PostSetupV1ResourcesIDUploadimageRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDUploadimageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
