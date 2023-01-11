import dataclasses



@dataclasses.dataclass
class RetrieveAccountTransactionsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveAccountTransactionsRequest:
    path_params: RetrieveAccountTransactionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAccountTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
