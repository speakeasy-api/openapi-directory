import dataclasses
from typing import Optional
from enum import Enum

class GetDiscoveryV2SuggestIncludeFuzzyEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2SuggestIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2SuggestIncludeSpellcheckEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2SuggestIncludeTbaEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class GetDiscoveryV2SuggestIncludeTbdEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class GetDiscoveryV2SuggestSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"
    UNIVERSE = " universe"
    FRONTGATE = " frontgate"
    TMR = " tmr"

class GetDiscoveryV2SuggestUnitEnum(str, Enum):
    MILES = "miles"
    KM = "km"


@dataclasses.dataclass
class GetDiscoveryV2SuggestQueryParams:
    client_visibility: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientVisibility', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countryCode', 'style': 'form', 'explode': True }})
    geo_point: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geoPoint', 'style': 'form', 'explode': True }})
    include_fuzzy: Optional[GetDiscoveryV2SuggestIncludeFuzzyEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeFuzzy', 'style': 'form', 'explode': True }})
    include_licensed_content: Optional[GetDiscoveryV2SuggestIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    include_spellcheck: Optional[GetDiscoveryV2SuggestIncludeSpellcheckEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeSpellcheck', 'style': 'form', 'explode': True }})
    include_tba: Optional[GetDiscoveryV2SuggestIncludeTbaEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTBA', 'style': 'form', 'explode': True }})
    include_tbd: Optional[GetDiscoveryV2SuggestIncludeTbdEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTBD', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    latlong: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latlong', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    radius: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    segment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'segmentId', 'style': 'form', 'explode': True }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    source: Optional[GetDiscoveryV2SuggestSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    unit: Optional[GetDiscoveryV2SuggestUnitEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDiscoveryV2SuggestRequest:
    query_params: GetDiscoveryV2SuggestQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDiscoveryV2SuggestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_discovery_v2_suggest_200_application_hal_plus_json_string: Optional[str] = dataclasses.field(default=None)
    get_discovery_v2_suggest_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
