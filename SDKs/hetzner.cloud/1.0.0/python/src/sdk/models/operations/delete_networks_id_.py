import dataclasses



@dataclasses.dataclass
class DeleteNetworksIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworksIDRequest:
    path_params: DeleteNetworksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
