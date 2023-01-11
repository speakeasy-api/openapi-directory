import dataclasses



@dataclasses.dataclass
class DeleteConsumerV1CustomersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConsumerV1CustomersIDRequest:
    path_params: DeleteConsumerV1CustomersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteConsumerV1CustomersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
