import dataclasses



@dataclasses.dataclass
class DcimFrontPortsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimFrontPortsDeleteRequest:
    path_params: DcimFrontPortsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimFrontPortsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
