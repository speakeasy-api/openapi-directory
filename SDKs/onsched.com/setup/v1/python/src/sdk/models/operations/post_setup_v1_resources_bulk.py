import dataclasses
from typing import Any,Optional
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PostSetupV1ResourcesBulkQueryParams:
    google_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesBulkRequests:
    resources_input_model: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resources_input_model1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resources_input_model2: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resources_input_model3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesBulkRequest:
    query_params: PostSetupV1ResourcesBulkQueryParams = dataclasses.field()
    request: Optional[PostSetupV1ResourcesBulkRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ResourcesBulkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_models: Optional[list[shared_resourceviewmodel.ResourceViewModel]] = dataclasses.field(default=None)
    
