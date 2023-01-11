import dataclasses
from typing import Optional
from ..shared import address as shared_address
from ..shared import area as shared_area
from ..shared import city as shared_city
from ..shared import country as shared_country
from ..shared import location as shared_location
from ..shared import state as shared_state


@dataclasses.dataclass
class Place:
    r"""Place
    Place
    """
    
    address: Optional[shared_address.Address] = dataclasses.field(default=None)
    area: Optional[shared_area.Area] = dataclasses.field(default=None)
    city: Optional[shared_city.City] = dataclasses.field(default=None)
    country: Optional[shared_country.Country] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    postal_code: Optional[str] = dataclasses.field(default=None)
    state: Optional[shared_state.State] = dataclasses.field(default=None)
    
