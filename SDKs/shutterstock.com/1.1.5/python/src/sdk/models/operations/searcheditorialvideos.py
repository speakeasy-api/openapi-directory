import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import editorialvideosearchresults as shared_editorialvideosearchresults

class SearchEditorialVideosResolutionEnum(str, Enum):
    FOURK = "4k"
    HIGH_DEFINITION = "high_definition"
    STANDARD_DEFINITION = "standard_definition"

class SearchEditorialVideosSortEnum(str, Enum):
    RELEVANT = "relevant"
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclasses.dataclass
class SearchEditorialVideosQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    date_end: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    fps: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fps', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    resolution: Optional[SearchEditorialVideosResolutionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    sort: Optional[SearchEditorialVideosSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    supplier_code: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'supplier_code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchEditorialVideosSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SearchEditorialVideosRequest:
    query_params: SearchEditorialVideosQueryParams = dataclasses.field()
    security: SearchEditorialVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchEditorialVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    editorial_video_search_results: Optional[shared_editorialvideosearchresults.EditorialVideoSearchResults] = dataclasses.field(default=None)
    
