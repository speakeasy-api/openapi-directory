import dataclasses
from typing import Optional
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PostSetupV1ResourcesIDServicesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDServicesRequests:
    strings: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    strings1: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    strings2: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    strings3: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDServicesRequest:
    path_params: PostSetupV1ResourcesIDServicesPathParams = dataclasses.field()
    request: Optional[PostSetupV1ResourcesIDServicesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
