import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conceptrelation as shared_conceptrelation

class GetSearchJSONFieldsEnum(str, Enum):
    ALL = "all"
    PAGES = "pages"
    TICKER_SYMBOL = "ticker_symbol"
    LINKS = "links"
    TAXONOMY = "taxonomy"
    COMBINATIONS = "combinations"
    GEOCODES = "geocodes"
    ARTICLE_LIST = "article_list"
    SCOPE_NOTES = "scope_notes"
    SEARCH_API_QUERY = "search_api_query"


@dataclasses.dataclass
class GetSearchJSONQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    fields: Optional[GetSearchJSONFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSearchJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_conceptrelation.ConceptRelation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetSearchJSONRequest:
    query_params: GetSearchJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_search_json_200_application_json_object: Optional[GetSearchJSON200ApplicationJSON] = dataclasses.field(default=None)
    
