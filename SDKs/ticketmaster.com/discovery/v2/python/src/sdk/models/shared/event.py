import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import accessibility as shared_accessibility
from ..shared import classification as shared_classification
from ..shared import eventdates as shared_eventdates
from ..shared import externallink as shared_externallink
from ..shared import image as shared_image
from ..shared import location as shared_location
from ..shared import outlet as shared_outlet
from ..shared import place as shared_place
from ..shared import pricerange as shared_pricerange
from ..shared import product as shared_product
from ..shared import promoter as shared_promoter
from ..shared import eventsalesdates as shared_eventsalesdates
from ..shared import seatmap as shared_seatmap

class EventTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclasses.dataclass
class Event:
    r"""Event
    Event
    """
    
    id: str = dataclasses.field()
    type: EventTypeEnum = dataclasses.field()
    accessibility: Optional[shared_accessibility.Accessibility] = dataclasses.field(default=None)
    additional_info: Optional[str] = dataclasses.field(default=None)
    classifications: Optional[list[shared_classification.Classification]] = dataclasses.field(default=None)
    dates: Optional[shared_eventdates.EventDates] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    distance: Optional[float] = dataclasses.field(default=None)
    external_links: Optional[dict[str, list[shared_externallink.ExternalLink]]] = dataclasses.field(default=None)
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None)
    info: Optional[str] = dataclasses.field(default=None)
    locale: Optional[str] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    outlets: Optional[list[shared_outlet.Outlet]] = dataclasses.field(default=None)
    place: Optional[shared_place.Place] = dataclasses.field(default=None)
    please_note: Optional[str] = dataclasses.field(default=None)
    price_ranges: Optional[list[shared_pricerange.PriceRange]] = dataclasses.field(default=None)
    products: Optional[list[shared_product.Product]] = dataclasses.field(default=None)
    promoter: Optional[shared_promoter.Promoter] = dataclasses.field(default=None)
    promoters: Optional[list[shared_promoter.Promoter]] = dataclasses.field(default=None)
    sales: Optional[shared_eventsalesdates.EventSalesDates] = dataclasses.field(default=None)
    seatmap: Optional[shared_seatmap.SeatMap] = dataclasses.field(default=None)
    test: Optional[bool] = dataclasses.field(default=None)
    units: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
