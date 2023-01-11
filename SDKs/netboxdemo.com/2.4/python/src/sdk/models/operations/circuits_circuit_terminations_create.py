import dataclasses
from typing import Optional
from ..shared import writablecircuittermination as shared_writablecircuittermination
from ..shared import circuittermination as shared_circuittermination


@dataclasses.dataclass
class CircuitsCircuitTerminationsCreateRequest:
    request: shared_writablecircuittermination.WritableCircuitTerminationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit_termination: Optional[shared_circuittermination.CircuitTermination] = dataclasses.field(default=None)
    
