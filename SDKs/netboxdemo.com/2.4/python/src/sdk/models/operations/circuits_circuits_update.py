import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablecircuit as shared_writablecircuit
from ..shared import circuit as shared_circuit


@dataclasses.dataclass
class CircuitsCircuitsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsCircuitsUpdateRequest:
    path_params: CircuitsCircuitsUpdatePathParams = dataclasses.field()
    request: shared_writablecircuit.WritableCircuitInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsCircuitsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    circuit: Optional[shared_circuit.Circuit] = dataclasses.field(default=None)
    
