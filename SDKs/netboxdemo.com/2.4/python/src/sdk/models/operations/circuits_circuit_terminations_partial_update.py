import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablecircuittermination as shared_writablecircuittermination
from ..shared import circuittermination as shared_circuittermination


@dataclasses.dataclass
class CircuitsCircuitTerminationsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsPartialUpdateRequest:
    path_params: CircuitsCircuitTerminationsPartialUpdatePathParams = dataclasses.field()
    request: shared_writablecircuittermination.WritableCircuitTerminationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsCircuitTerminationsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit_termination: Optional[shared_circuittermination.CircuitTermination] = dataclasses.field(default=None)
    
