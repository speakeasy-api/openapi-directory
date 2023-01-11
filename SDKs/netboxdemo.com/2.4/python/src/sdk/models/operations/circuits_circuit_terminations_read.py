import dataclasses
from typing import Optional
from ..shared import circuittermination as shared_circuittermination


@dataclasses.dataclass
class CircuitsCircuitTerminationsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsReadRequest:
    path_params: CircuitsCircuitTerminationsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit_termination: Optional[shared_circuittermination.CircuitTermination] = dataclasses.field(default=None)
    
