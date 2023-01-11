import dataclasses
from typing import Optional
from ..shared import writablerackreservation as shared_writablerackreservation
from ..shared import rackreservation as shared_rackreservation


@dataclasses.dataclass
class DcimRackReservationsCreateRequest:
    request: shared_writablerackreservation.WritableRackReservationInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRackReservationsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_reservation: Optional[shared_rackreservation.RackReservation] = dataclasses.field(default=None)
    
