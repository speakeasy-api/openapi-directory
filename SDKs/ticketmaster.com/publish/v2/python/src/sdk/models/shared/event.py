import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attraction as shared_attraction
from ..shared import classification as shared_classification
from ..shared import eventdates as shared_eventdates
from ..shared import image as shared_image
from ..shared import location as shared_location
from ..shared import place as shared_place
from ..shared import pricerange as shared_pricerange
from ..shared import promoter as shared_promoter
from ..shared import publicvisibility as shared_publicvisibility
from ..shared import eventsalesdates as shared_eventsalesdates
from ..shared import source as shared_source
from ..shared import venue as shared_venue

class EventTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclasses.dataclass
class Event:
    r"""Event
    Event
    """
    
    type: EventTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    additional_infos: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInfos') }})
    attractions: Optional[list[shared_attraction.Attraction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attractions') }})
    classifications: Optional[list[shared_classification.Classification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    dates: Optional[shared_eventdates.EventDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dates') }})
    descriptions: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    discoverable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverable') }})
    distance: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    images: Optional[list[shared_image.Image]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    infos: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infos') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    names: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    place: Optional[shared_place.Place] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('place') }})
    please_notes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pleaseNotes') }})
    price_ranges: Optional[list[shared_pricerange.PriceRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceRanges') }})
    promoter: Optional[shared_promoter.Promoter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promoter') }})
    public_visibility: Optional[shared_publicvisibility.PublicVisibility] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicVisibility') }})
    references: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    relationships: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    sales: Optional[shared_eventsalesdates.EventSalesDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sales') }})
    source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    test: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    venue: Optional[shared_venue.Venue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
