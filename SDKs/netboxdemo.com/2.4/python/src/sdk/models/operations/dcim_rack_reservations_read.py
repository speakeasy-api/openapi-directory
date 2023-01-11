import dataclasses
from typing import Optional
from ..shared import rackreservation as shared_rackreservation


@dataclasses.dataclass
class DcimRackReservationsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRackReservationsReadRequest:
    path_params: DcimRackReservationsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackReservationsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rack_reservation: Optional[shared_rackreservation.RackReservation] = dataclasses.field(default=None)
    
