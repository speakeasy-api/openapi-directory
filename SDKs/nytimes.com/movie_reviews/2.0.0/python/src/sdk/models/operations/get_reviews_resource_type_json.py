import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import movie as shared_movie

class GetReviewsResourceTypeJSONResourceTypeEnum(str, Enum):
    ALL = "all"
    PICKS = "picks"


@dataclasses.dataclass
class GetReviewsResourceTypeJSONPathParams:
    resource_type: GetReviewsResourceTypeJSONResourceTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'resource-type', 'style': 'simple', 'explode': False }})
    
class GetReviewsResourceTypeJSONOrderEnum(str, Enum):
    BY_TITLE = "by-title"
    BY_PUBLICATION_DATE = "by-publication-date"
    BY_OPENING_DATE = "by-opening-date"


@dataclasses.dataclass
class GetReviewsResourceTypeJSONQueryParams:
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[GetReviewsResourceTypeJSONOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetReviewsResourceTypeJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[list[shared_movie.Movie]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetReviewsResourceTypeJSONRequest:
    path_params: GetReviewsResourceTypeJSONPathParams = dataclasses.field()
    query_params: GetReviewsResourceTypeJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReviewsResourceTypeJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_reviews_resource_type_json_200_application_json_object: Optional[GetReviewsResourceTypeJSON200ApplicationJSON] = dataclasses.field(default=None)
    
