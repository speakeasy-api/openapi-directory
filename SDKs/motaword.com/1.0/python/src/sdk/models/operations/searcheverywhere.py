import dataclasses
from typing import Optional
from enum import Enum
from ..shared import searcheverywhereresult as shared_searcheverywhereresult

class SearchEverywhereIncludeEnum(str, Enum):
    PROJECTS = "projects"
    DOCUMENTS = "documents"
    STRINGS = "strings"


@dataclasses.dataclass
class SearchEverywhereQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    include_: Optional[list[SearchEverywhereIncludeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include[]', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchEverywhereRequest:
    query_params: SearchEverywhereQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchEverywhereResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_everywhere_result: Optional[shared_searcheverywhereresult.SearchEverywhereResult] = dataclasses.field(default=None)
    
