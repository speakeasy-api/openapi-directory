import dataclasses
from typing import Optional
from ..shared import circuittype as shared_circuittype
from ..shared import circuittype as shared_circuittype


@dataclasses.dataclass
class CircuitsCircuitTypesCreateRequest:
    request: shared_circuittype.CircuitTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsCircuitTypesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit_type: Optional[shared_circuittype.CircuitType] = dataclasses.field(default=None)
    
