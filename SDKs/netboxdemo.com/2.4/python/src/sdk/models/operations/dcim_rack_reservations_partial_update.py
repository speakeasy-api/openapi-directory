import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writablerackreservation as shared_writablerackreservation
from ..shared import rackreservation as shared_rackreservation


@dataclasses.dataclass
class DcimRackReservationsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackReservationsPartialUpdateRequest:
    path_params: DcimRackReservationsPartialUpdatePathParams = dataclasses.field()
    request: shared_writablerackreservation.WritableRackReservationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRackReservationsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_reservation: Optional[shared_rackreservation.RackReservation] = dataclasses.field(default=None)
    
