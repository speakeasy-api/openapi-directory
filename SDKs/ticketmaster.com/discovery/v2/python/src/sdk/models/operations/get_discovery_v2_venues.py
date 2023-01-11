import dataclasses
from typing import Optional
from enum import Enum

class GetDiscoveryV2VenuesIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2VenuesIncludeSpellcheckEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2VenuesIncludeTestEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class GetDiscoveryV2VenuesSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"
    UNIVERSE = " universe"
    FRONTGATE = " frontgate"
    TMR = " tmr"

class GetDiscoveryV2VenuesUnitEnum(str, Enum):
    MILES = "miles"
    KM = "km"


@dataclasses.dataclass
class GetDiscoveryV2VenuesQueryParams:
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countryCode', 'style': 'form', 'explode': True }})
    geo_point: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geoPoint', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_licensed_content: Optional[GetDiscoveryV2VenuesIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    include_spellcheck: Optional[GetDiscoveryV2VenuesIncludeSpellcheckEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeSpellcheck', 'style': 'form', 'explode': True }})
    include_test: Optional[GetDiscoveryV2VenuesIncludeTestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTest', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    latlong: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latlong', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    radius: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source: Optional[GetDiscoveryV2VenuesSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    state_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stateCode', 'style': 'form', 'explode': True }})
    unit: Optional[GetDiscoveryV2VenuesUnitEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDiscoveryV2VenuesRequest:
    query_params: GetDiscoveryV2VenuesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDiscoveryV2VenuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
