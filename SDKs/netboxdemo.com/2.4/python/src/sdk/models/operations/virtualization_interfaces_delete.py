import dataclasses



@dataclasses.dataclass
class VirtualizationInterfacesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationInterfacesDeleteRequest:
    path_params: VirtualizationInterfacesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationInterfacesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
