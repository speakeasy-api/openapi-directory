import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReservationAffinityConsumeReservationTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NO_RESERVATION = "NO_RESERVATION"
    ANY_RESERVATION = "ANY_RESERVATION"
    SPECIFIC_RESERVATION = "SPECIFIC_RESERVATION"


@dataclass_json
@dataclasses.dataclass
class ReservationAffinity:
    r"""ReservationAffinity
    Reservation Affinity for consuming Zonal reservation.
    """
    
    consume_reservation_type: Optional[ReservationAffinityConsumeReservationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumeReservationType') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
