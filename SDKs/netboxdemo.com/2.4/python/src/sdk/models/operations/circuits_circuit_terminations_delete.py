import dataclasses



@dataclasses.dataclass
class CircuitsCircuitTerminationsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsDeleteRequest:
    path_params: CircuitsCircuitTerminationsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
