import dataclasses
from typing import Optional
from ..shared import resourceallocationviewmodel as shared_resourceallocationviewmodel


@dataclasses.dataclass
class GetSetupV1ResourcesAllocationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesAllocationsIDRequest:
    path_params: GetSetupV1ResourcesAllocationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ResourcesAllocationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_allocation_view_model: Optional[shared_resourceallocationviewmodel.ResourceAllocationViewModel] = dataclasses.field(default=None)
    
