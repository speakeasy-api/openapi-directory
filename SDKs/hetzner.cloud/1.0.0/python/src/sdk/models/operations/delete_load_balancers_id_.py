import dataclasses



@dataclasses.dataclass
class DeleteLoadBalancersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLoadBalancersIDRequest:
    path_params: DeleteLoadBalancersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLoadBalancersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
