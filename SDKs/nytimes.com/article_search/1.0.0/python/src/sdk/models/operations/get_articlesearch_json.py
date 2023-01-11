import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import doc as shared_doc

class GetArticlesearchJSONSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclasses.dataclass
class GetArticlesearchJSONQueryParams:
    begin_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'begin_date', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    facet_field: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_field', 'style': 'form', 'explode': True }})
    facet_filter: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facet_filter', 'style': 'form', 'explode': True }})
    fl: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fl', 'style': 'form', 'explode': True }})
    fq: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fq', 'style': 'form', 'explode': True }})
    hl: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hl', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[GetArticlesearchJSONSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetArticlesearchJSON200ApplicationJSONResponseMeta:
    hits: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hits') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclasses.dataclass
class GetArticlesearchJSON200ApplicationJSONResponse:
    docs: Optional[list[shared_doc.Doc]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docs') }})
    meta: Optional[GetArticlesearchJSON200ApplicationJSONResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class GetArticlesearchJSON200ApplicationJSON:
    response: Optional[GetArticlesearchJSON200ApplicationJSONResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    

@dataclasses.dataclass
class GetArticlesearchJSONRequest:
    query_params: GetArticlesearchJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetArticlesearchJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_articlesearch_json_200_application_json_object: Optional[GetArticlesearchJSON200ApplicationJSON] = dataclasses.field(default=None)
    
