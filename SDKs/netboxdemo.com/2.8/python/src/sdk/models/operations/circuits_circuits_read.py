import dataclasses
from typing import Optional
from ..shared import circuit as shared_circuit


@dataclasses.dataclass
class CircuitsCircuitsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitsReadRequest:
    path_params: CircuitsCircuitsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsCircuitsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit: Optional[shared_circuit.Circuit] = dataclasses.field(default=None)
    
