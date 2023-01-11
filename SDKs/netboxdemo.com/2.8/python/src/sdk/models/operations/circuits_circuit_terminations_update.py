import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablecircuittermination as shared_writablecircuittermination
from ..shared import circuittermination as shared_circuittermination


@dataclasses.dataclass
class CircuitsCircuitTerminationsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsUpdateRequest:
    path_params: CircuitsCircuitTerminationsUpdatePathParams = dataclasses.field()
    request: shared_writablecircuittermination.WritableCircuitTerminationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit_termination: Optional[shared_circuittermination.CircuitTermination] = dataclasses.field(default=None)
    
