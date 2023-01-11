import dataclasses



@dataclasses.dataclass
class CircuitsCircuitTypesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitTypesDeleteRequest:
    path_params: CircuitsCircuitTypesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsCircuitTypesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
