import dataclasses
from typing import Optional
from enum import Enum

class GetDiscoveryV2ClassificationsIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2ClassificationsIncludeSpellcheckEnum(str, Enum):
    YES = "yes"
    NO = " no"

class GetDiscoveryV2ClassificationsIncludeTestEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class GetDiscoveryV2ClassificationsSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"
    UNIVERSE = " universe"
    FRONTGATE = " frontgate"
    TMR = " tmr"


@dataclasses.dataclass
class GetDiscoveryV2ClassificationsQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_licensed_content: Optional[GetDiscoveryV2ClassificationsIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    include_spellcheck: Optional[GetDiscoveryV2ClassificationsIncludeSpellcheckEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeSpellcheck', 'style': 'form', 'explode': True }})
    include_test: Optional[GetDiscoveryV2ClassificationsIncludeTestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTest', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source: Optional[GetDiscoveryV2ClassificationsSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDiscoveryV2ClassificationsRequest:
    query_params: GetDiscoveryV2ClassificationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDiscoveryV2ClassificationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
