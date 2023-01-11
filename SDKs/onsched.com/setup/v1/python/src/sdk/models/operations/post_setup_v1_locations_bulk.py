import dataclasses
from typing import Any,Optional
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class PostSetupV1LocationsBulkRequests:
    locations_input_model: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    locations_input_model1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    locations_input_model2: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    locations_input_model3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1LocationsBulkRequest:
    request: Optional[PostSetupV1LocationsBulkRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1LocationsBulkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_models: Optional[list[shared_locationviewmodel.LocationViewModel]] = dataclasses.field(default=None)
    
