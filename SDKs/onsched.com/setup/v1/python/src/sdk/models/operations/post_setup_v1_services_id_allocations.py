import dataclasses
from typing import Optional
from ..shared import serviceallocationinputmodel as shared_serviceallocationinputmodel
from ..shared import serviceallocationviewmodel as shared_serviceallocationviewmodel


@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsRequests:
    service_allocation_input_model: Optional[shared_serviceallocationinputmodel.ServiceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_allocation_input_model1: Optional[shared_serviceallocationinputmodel.ServiceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_allocation_input_model2: Optional[shared_serviceallocationinputmodel.ServiceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_allocation_input_model3: Optional[shared_serviceallocationinputmodel.ServiceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsRequest:
    path_params: PostSetupV1ServicesIDAllocationsPathParams = dataclasses.field()
    request: Optional[PostSetupV1ServicesIDAllocationsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ServicesIDAllocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_allocation_view_model: Optional[shared_serviceallocationviewmodel.ServiceAllocationViewModel] = dataclasses.field(default=None)
    
