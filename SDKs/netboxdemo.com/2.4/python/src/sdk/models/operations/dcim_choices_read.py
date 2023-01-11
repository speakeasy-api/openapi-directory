import dataclasses



@dataclasses.dataclass
class DcimChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimChoicesReadRequest:
    path_params: DcimChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
