import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class GetDiscoveryV2EventsIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2EventsIncludeSpellcheckEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2EventsIncludeTbaEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class GetDiscoveryV2EventsIncludeTbdEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class GetDiscoveryV2EventsIncludeTestEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class GetDiscoveryV2EventsSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"
    UNIVERSE = " universe"
    FRONTGATE = " frontgate"
    TMR = " tmr"

class GetDiscoveryV2EventsUnitEnum(str, Enum):
    MILES = "miles"
    KM = "km"


@dataclasses.dataclass
class GetDiscoveryV2EventsQueryParams:
    attraction_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'attractionId', 'style': 'form', 'explode': True }})
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    classification_id: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationId', 'style': 'form', 'explode': True }})
    classification_name: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationName', 'style': 'form', 'explode': True }})
    client_visibility: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientVisibility', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countryCode', 'style': 'form', 'explode': True }})
    dma_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dmaId', 'style': 'form', 'explode': True }})
    end_date_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endDateTime', 'style': 'form', 'explode': True }})
    geo_point: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geoPoint', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_licensed_content: Optional[GetDiscoveryV2EventsIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    include_spellcheck: Optional[GetDiscoveryV2EventsIncludeSpellcheckEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeSpellcheck', 'style': 'form', 'explode': True }})
    include_tba: Optional[GetDiscoveryV2EventsIncludeTbaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTBA', 'style': 'form', 'explode': True }})
    include_tbd: Optional[GetDiscoveryV2EventsIncludeTbdEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTBD', 'style': 'form', 'explode': True }})
    include_test: Optional[GetDiscoveryV2EventsIncludeTestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTest', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    latlong: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latlong', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    market_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'marketId', 'style': 'form', 'explode': True }})
    onsale_end_date_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onsaleEndDateTime', 'style': 'form', 'explode': True }})
    onsale_on_after_start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onsaleOnAfterStartDate', 'style': 'form', 'explode': True }})
    onsale_on_start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onsaleOnStartDate', 'style': 'form', 'explode': True }})
    onsale_start_date_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onsaleStartDateTime', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'postalCode', 'style': 'form', 'explode': True }})
    promoter_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'promoterId', 'style': 'form', 'explode': True }})
    radius: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    segment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'segmentId', 'style': 'form', 'explode': True }})
    segment_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'segmentName', 'style': 'form', 'explode': True }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source: Optional[GetDiscoveryV2EventsSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    start_date_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startDateTime', 'style': 'form', 'explode': True }})
    state_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stateCode', 'style': 'form', 'explode': True }})
    unit: Optional[GetDiscoveryV2EventsUnitEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    venue_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'venueId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDiscoveryV2EventsRequest:
    query_params: GetDiscoveryV2EventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDiscoveryV2EventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
