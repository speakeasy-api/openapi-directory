import dataclasses
from typing import Optional


@dataclasses.dataclass
class VenueBoxOfficeInfo:
    r"""VenueBoxOfficeInfo
    Venue box office information
    """
    
    accepted_payment_detail: Optional[str] = dataclasses.field(default=None)
    open_hours_detail: Optional[str] = dataclasses.field(default=None)
    phone_number_detail: Optional[str] = dataclasses.field(default=None)
    will_call_detail: Optional[str] = dataclasses.field(default=None)
    
