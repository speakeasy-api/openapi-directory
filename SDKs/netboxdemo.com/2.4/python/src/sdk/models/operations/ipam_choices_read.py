import dataclasses



@dataclasses.dataclass
class IpamChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamChoicesReadRequest:
    path_params: IpamChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
