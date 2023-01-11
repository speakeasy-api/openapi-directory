import dataclasses
from typing import Optional
from ..shared import resourceallocationinputmodel as shared_resourceallocationinputmodel
from ..shared import resourceblockviewmodel as shared_resourceblockviewmodel


@dataclasses.dataclass
class PostSetupV1ResourcesIDAllocationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDAllocationsRequests:
    resource_allocation_input_model: Optional[shared_resourceallocationinputmodel.ResourceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_allocation_input_model1: Optional[shared_resourceallocationinputmodel.ResourceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_allocation_input_model2: Optional[shared_resourceallocationinputmodel.ResourceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_allocation_input_model3: Optional[shared_resourceallocationinputmodel.ResourceAllocationInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDAllocationsRequest:
    path_params: PostSetupV1ResourcesIDAllocationsPathParams = dataclasses.field()
    request: Optional[PostSetupV1ResourcesIDAllocationsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDAllocationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_view_model: Optional[shared_resourceblockviewmodel.ResourceBlockViewModel] = dataclasses.field(default=None)
    
