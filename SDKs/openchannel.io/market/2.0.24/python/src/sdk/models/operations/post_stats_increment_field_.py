import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PostStatsIncrementFieldPathParams:
    field: str = dataclasses.field(metadata={'path_param': { 'field_name': 'field', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostStatsIncrementFieldQueryParams:
    app_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'appId', 'style': 'form', 'explode': True }})
    date_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'value', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostStatsIncrementFieldRequest:
    path_params: PostStatsIncrementFieldPathParams = dataclasses.field()
    query_params: PostStatsIncrementFieldQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostStatsIncrementFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
