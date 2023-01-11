import dataclasses
from typing import Optional
from ..shared import searchresult as shared_searchresult


@dataclasses.dataclass
class GetSearchEntitiesPathParams:
    term: str = dataclasses.field(metadata={'path_param': { 'field_name': 'term', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchEntitiesQueryParams:
    boost_fx: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'boost_fx', 'style': 'form', 'explode': True }})
    boost_q: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'boost_q', 'style': 'form', 'explode': True }})
    category: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    exclude_groups: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_groups', 'style': 'form', 'explode': True }})
    fq: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fq', 'style': 'form', 'explode': True }})
    highlight_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'highlight_class', 'style': 'form', 'explode': True }})
    include_eqs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_eqs', 'style': 'form', 'explode': True }})
    min_match: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_match', 'style': 'form', 'explode': True }})
    minimal_tokenizer: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minimal_tokenizer', 'style': 'form', 'explode': True }})
    prefix: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    taxon: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taxon', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchEntitiesRequest:
    path_params: GetSearchEntitiesPathParams = dataclasses.field()
    query_params: GetSearchEntitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchEntitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_result: Optional[shared_searchresult.SearchResult] = dataclasses.field(default=None)
    
