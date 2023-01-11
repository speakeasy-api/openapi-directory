import dataclasses
from typing import Optional
from ..shared import stateviewmodel as shared_stateviewmodel


@dataclasses.dataclass
class GetConsumerV1CustomersStatesQueryParams:
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersStatesRequest:
    query_params: GetConsumerV1CustomersStatesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersStatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    state_view_models: Optional[list[shared_stateviewmodel.StateViewModel]] = dataclasses.field(default=None)
    
