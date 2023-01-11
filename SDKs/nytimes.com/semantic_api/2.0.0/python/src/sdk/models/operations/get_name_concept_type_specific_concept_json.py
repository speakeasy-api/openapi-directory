import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import concept as shared_concept

class GetNameConceptTypeSpecificConceptJSONConceptTypeEnum(str, Enum):
    NYTD_GEO = "nytd_geo"
    NYTD_PER = "nytd_per"
    NYTD_ORG = "nytd_org"
    NYTD_DES = "nytd_des"


@dataclasses.dataclass
class GetNameConceptTypeSpecificConceptJSONPathParams:
    concept_type: GetNameConceptTypeSpecificConceptJSONConceptTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'concept-type', 'style': 'simple', 'explode': False }})
    specific_concept: str = dataclasses.field(metadata={'path_param': { 'field_name': 'specific-concept', 'style': 'simple', 'explode': False }})
    
class GetNameConceptTypeSpecificConceptJSONFieldsEnum(str, Enum):
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
class GetNameConceptTypeSpecificConceptJSONQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    fields: Optional[GetNameConceptTypeSpecificConceptJSONFieldsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetNameConceptTypeSpecificConceptJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_concept.Concept]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetNameConceptTypeSpecificConceptJSONRequest:
    path_params: GetNameConceptTypeSpecificConceptJSONPathParams = dataclasses.field()
    query_params: GetNameConceptTypeSpecificConceptJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNameConceptTypeSpecificConceptJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_name_concept_type_specific_concept_json_200_application_json_object: Optional[GetNameConceptTypeSpecificConceptJSON200ApplicationJSON] = dataclasses.field(default=None)
    
