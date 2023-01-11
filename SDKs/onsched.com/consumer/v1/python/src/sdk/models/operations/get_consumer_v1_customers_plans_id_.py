import dataclasses
from typing import Optional
from ..shared import customerplanviewmodel as shared_customerplanviewmodel


@dataclasses.dataclass
class GetConsumerV1CustomersPlansIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersPlansIDRequest:
    path_params: GetConsumerV1CustomersPlansIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersPlansIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_plan_view_model: Optional[shared_customerplanviewmodel.CustomerPlanViewModel] = dataclasses.field(default=None)
    
