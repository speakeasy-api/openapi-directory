import dataclasses



@dataclasses.dataclass
class CircuitsChoicesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsChoicesReadRequest:
    path_params: CircuitsChoicesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsChoicesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
