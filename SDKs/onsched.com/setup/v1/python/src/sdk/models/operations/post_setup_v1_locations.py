import dataclasses
from typing import Optional
from ..shared import locationinputmodel as shared_locationinputmodel
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class PostSetupV1LocationsRequests:
    location_input_model: Optional[shared_locationinputmodel.LocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    location_input_model1: Optional[shared_locationinputmodel.LocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    location_input_model2: Optional[shared_locationinputmodel.LocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    location_input_model3: Optional[shared_locationinputmodel.LocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1LocationsRequest:
    request: Optional[PostSetupV1LocationsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1LocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
