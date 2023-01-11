import dataclasses



@dataclasses.dataclass
class ExtrasChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasChoicesReadRequest:
    path_params: ExtrasChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
