import dataclasses
from typing import Any,Optional
from enum import Enum

class FindIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"

class FindIncludeSpellcheckEnum(str, Enum):
    YES = "yes"
    NO = " no"

class FindIncludeTestEnum(str, Enum):
    YES = "yes"
    NO = " no"
    ONLY = " only"

class FindSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"
    UNIVERSE = " universe"
    FRONTGATE = " frontgate"
    TMR = " tmr"


@dataclasses.dataclass
class FindQueryParams:
    classification_id: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationId', 'style': 'form', 'explode': True }})
    classification_name: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'classificationName', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_licensed_content: Optional[FindIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    include_spellcheck: Optional[FindIncludeSpellcheckEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeSpellcheck', 'style': 'form', 'explode': True }})
    include_test: Optional[FindIncludeTestEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeTest', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source: Optional[FindSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindRequest:
    query_params: FindQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
