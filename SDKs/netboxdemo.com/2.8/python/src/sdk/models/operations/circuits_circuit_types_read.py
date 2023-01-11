import dataclasses
from typing import Optional
from ..shared import circuittype as shared_circuittype


@dataclasses.dataclass
class CircuitsCircuitTypesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitTypesReadRequest:
    path_params: CircuitsCircuitTypesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsCircuitTypesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit_type: Optional[shared_circuittype.CircuitType] = dataclasses.field(default=None)
    
