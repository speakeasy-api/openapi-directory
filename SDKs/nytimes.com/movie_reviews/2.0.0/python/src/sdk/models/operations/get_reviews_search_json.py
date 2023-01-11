import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import movie as shared_movie

class GetReviewsSearchJSONCriticsPickEnum(str, Enum):
    Y = "Y"
    N = "N"


@dataclasses.dataclass
class GetReviewsSearchJSONQueryParams:
    critics_pick: Optional[GetReviewsSearchJSONCriticsPickEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'critics-pick', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opening_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opening-date', 'style': 'form', 'explode': True }})
    order: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    publication_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publication-date', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    reviewer: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reviewer', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetReviewsSearchJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_movie.Movie]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetReviewsSearchJSONRequest:
    query_params: GetReviewsSearchJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReviewsSearchJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_reviews_search_json_200_application_json_object: Optional[GetReviewsSearchJSON200ApplicationJSON] = dataclasses.field(default=None)
    
