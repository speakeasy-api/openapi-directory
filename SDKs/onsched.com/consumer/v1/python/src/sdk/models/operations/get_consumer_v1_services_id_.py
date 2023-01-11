import dataclasses
from typing import Optional
from ..shared import serviceviewmodel as shared_serviceviewmodel


@dataclasses.dataclass
class GetConsumerV1ServicesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDRequest:
    path_params: GetConsumerV1ServicesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1ServicesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_view_model: Optional[shared_serviceviewmodel.ServiceViewModel] = dataclasses.field(default=None)
    
