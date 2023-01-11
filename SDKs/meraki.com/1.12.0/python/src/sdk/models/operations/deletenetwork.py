import dataclasses



@dataclasses.dataclass
class DeleteNetworkPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkRequest:
    path_params: DeleteNetworkPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
