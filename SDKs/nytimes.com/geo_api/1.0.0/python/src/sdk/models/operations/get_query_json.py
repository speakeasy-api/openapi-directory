import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import event as shared_event


@dataclasses.dataclass
class GetQueryJSONQueryParams:
    date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    elevation: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'elevation', 'style': 'form', 'explode': True }})
    facets: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facets', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    latitude: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    longitude: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sw', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetQueryJSON200ApplicationJSON:
    results: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class GetQueryJSONRequest:
    query_params: GetQueryJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQueryJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_query_json_200_application_json_object: Optional[GetQueryJSON200ApplicationJSON] = dataclasses.field(default=None)
    
