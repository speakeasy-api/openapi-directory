import dataclasses
from typing import Optional
from ..shared import customerviewmodel as shared_customerviewmodel


@dataclasses.dataclass
class GetConsumerV1CustomersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersIDRequest:
    path_params: GetConsumerV1CustomersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_view_model: Optional[shared_customerviewmodel.CustomerViewModel] = dataclasses.field(default=None)
    
