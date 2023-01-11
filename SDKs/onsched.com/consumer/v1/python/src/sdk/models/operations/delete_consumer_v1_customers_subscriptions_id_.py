import dataclasses



@dataclasses.dataclass
class DeleteConsumerV1CustomersSubscriptionsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConsumerV1CustomersSubscriptionsIDRequest:
    path_params: DeleteConsumerV1CustomersSubscriptionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteConsumerV1CustomersSubscriptionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
