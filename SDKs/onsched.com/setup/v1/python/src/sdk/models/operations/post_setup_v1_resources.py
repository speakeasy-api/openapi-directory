import dataclasses
from typing import Optional
from ..shared import resourceinputmodel as shared_resourceinputmodel
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PostSetupV1ResourcesQueryParams:
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesRequests:
    resource_input_model: Optional[shared_resourceinputmodel.ResourceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_input_model1: Optional[shared_resourceinputmodel.ResourceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_input_model2: Optional[shared_resourceinputmodel.ResourceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_input_model3: Optional[shared_resourceinputmodel.ResourceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesRequest:
    query_params: PostSetupV1ResourcesQueryParams = dataclasses.field()
    request: Optional[PostSetupV1ResourcesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
