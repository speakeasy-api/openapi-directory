import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import circuittype as shared_circuittype
from ..shared import circuittype as shared_circuittype


@dataclasses.dataclass
class CircuitsCircuitTypesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitTypesUpdateRequest:
    path_params: CircuitsCircuitTypesUpdatePathParams = dataclasses.field()
    request: shared_circuittype.CircuitTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsCircuitTypesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit_type: Optional[shared_circuittype.CircuitType] = dataclasses.field(default=None)
    
