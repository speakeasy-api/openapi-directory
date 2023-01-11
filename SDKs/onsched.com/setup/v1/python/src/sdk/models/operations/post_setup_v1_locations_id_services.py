import dataclasses
from typing import Optional
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class PostSetupV1LocationsIDServicesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDServicesRequests:
    strings: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    strings1: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    strings2: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    strings3: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDServicesRequest:
    path_params: PostSetupV1LocationsIDServicesPathParams = dataclasses.field()
    request: Optional[PostSetupV1LocationsIDServicesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1LocationsIDServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
