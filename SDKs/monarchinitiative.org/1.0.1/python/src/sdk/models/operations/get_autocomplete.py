import dataclasses
from typing import Optional
from ..shared import autocompleteresults as shared_autocompleteresults


@dataclasses.dataclass
class GetAutocompletePathParams:
    term: str = dataclasses.field(metadata={'path_param': { 'field_name': 'term', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutocompleteQueryParams:
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
class GetAutocompleteRequest:
    path_params: GetAutocompletePathParams = dataclasses.field()
    query_params: GetAutocompleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAutocompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autocomplete_results: Optional[shared_autocompleteresults.AutocompleteResults] = dataclasses.field(default=None)
    
