import dataclasses



@dataclasses.dataclass
class CircuitsCircuitsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitsDeleteRequest:
    path_params: CircuitsCircuitsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsCircuitsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
