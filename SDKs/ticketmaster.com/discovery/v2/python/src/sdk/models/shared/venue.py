import dataclasses
from typing import Optional
from enum import Enum
from ..shared import address as shared_address
from ..shared import venueboxofficeinfo as shared_venueboxofficeinfo
from ..shared import city as shared_city
from ..shared import country as shared_country
from ..shared import dma as shared_dma
from ..shared import externallink as shared_externallink
from ..shared import venuegeneralinfo as shared_venuegeneralinfo
from ..shared import image as shared_image
from ..shared import location as shared_location
from ..shared import market as shared_market
from ..shared import social as shared_social
from ..shared import state as shared_state

class VenueTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclasses.dataclass
class Venue:
    r"""Venue
    Venue
    """
    
    id: str = dataclasses.field()
    type: VenueTypeEnum = dataclasses.field()
    accessible_seating_detail: Optional[str] = dataclasses.field(default=None)
    additional_info: Optional[str] = dataclasses.field(default=None)
    address: Optional[shared_address.Address] = dataclasses.field(default=None)
    box_office_info: Optional[shared_venueboxofficeinfo.VenueBoxOfficeInfo] = dataclasses.field(default=None)
    city: Optional[shared_city.City] = dataclasses.field(default=None)
    country: Optional[shared_country.Country] = dataclasses.field(default=None)
    currency: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    distance: Optional[float] = dataclasses.field(default=None)
    dma: Optional[list[shared_dma.Dma]] = dataclasses.field(default=None)
    external_links: Optional[dict[str, list[shared_externallink.ExternalLink]]] = dataclasses.field(default=None)
    general_info: Optional[shared_venuegeneralinfo.VenueGeneralInfo] = dataclasses.field(default=None)
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None)
    locale: Optional[str] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    markets: Optional[list[shared_market.Market]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    parking_detail: Optional[str] = dataclasses.field(default=None)
    postal_code: Optional[str] = dataclasses.field(default=None)
    social: Optional[shared_social.Social] = dataclasses.field(default=None)
    state: Optional[shared_state.State] = dataclasses.field(default=None)
    test: Optional[bool] = dataclasses.field(default=None)
    timezone: Optional[str] = dataclasses.field(default=None)
    units: Optional[str] = dataclasses.field(default=None)
    upcoming_events: Optional[dict[str, int]] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
