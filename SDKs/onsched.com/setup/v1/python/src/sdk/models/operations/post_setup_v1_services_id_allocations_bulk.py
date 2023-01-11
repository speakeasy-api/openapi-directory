import dataclasses
from typing import Any,Optional
from ..shared import serviceallocationviewmodel as shared_serviceallocationviewmodel


@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsBulkPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsBulkRequests:
    service_allocations_input_model: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_allocations_input_model1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_allocations_input_model2: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_allocations_input_model3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsBulkRequest:
    path_params: PostSetupV1ServicesIDAllocationsBulkPathParams = dataclasses.field()
    request: Optional[PostSetupV1ServicesIDAllocationsBulkRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsBulkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_allocation_view_models: Optional[list[shared_serviceallocationviewmodel.ServiceAllocationViewModel]] = dataclasses.field(default=None)
    
