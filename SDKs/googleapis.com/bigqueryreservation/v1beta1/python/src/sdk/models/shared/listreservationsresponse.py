import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reservation as shared_reservation


@dataclass_json
@dataclasses.dataclass
class ListReservationsResponse:
    r"""ListReservationsResponse
    The response for ReservationService.ListReservations.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reservations: Optional[list[shared_reservation.Reservation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservations') }})
    
