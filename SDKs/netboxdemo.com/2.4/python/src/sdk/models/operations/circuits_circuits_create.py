import dataclasses
from typing import Optional
from ..shared import writablecircuit as shared_writablecircuit
from ..shared import circuit as shared_circuit


@dataclasses.dataclass
class CircuitsCircuitsCreateRequest:
    request: shared_writablecircuit.WritableCircuitInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsCircuitsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit: Optional[shared_circuit.Circuit] = dataclasses.field(default=None)
    
