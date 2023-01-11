import dataclasses



@dataclasses.dataclass
class DeleteFloatingIpsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFloatingIpsIDRequest:
    path_params: DeleteFloatingIpsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFloatingIpsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
