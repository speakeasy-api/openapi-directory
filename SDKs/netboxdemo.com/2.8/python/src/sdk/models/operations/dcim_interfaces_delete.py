import dataclasses



@dataclasses.dataclass
class DcimInterfacesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInterfacesDeleteRequest:
    path_params: DcimInterfacesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInterfacesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
