import dataclasses



@dataclasses.dataclass
class RetrieveAccountBalancesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveAccountBalancesRequest:
    path_params: RetrieveAccountBalancesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAccountBalancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
