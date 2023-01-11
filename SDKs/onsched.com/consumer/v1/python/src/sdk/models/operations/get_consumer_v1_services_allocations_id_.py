import dataclasses
from typing import Optional
from ..shared import serviceallocationviewmodel as shared_serviceallocationviewmodel


@dataclasses.dataclass
class GetConsumerV1ServicesAllocationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1ServicesAllocationsIDRequest:
    path_params: GetConsumerV1ServicesAllocationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ServicesAllocationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_allocation_view_model: Optional[shared_serviceallocationviewmodel.ServiceAllocationViewModel] = dataclasses.field(default=None)
    
