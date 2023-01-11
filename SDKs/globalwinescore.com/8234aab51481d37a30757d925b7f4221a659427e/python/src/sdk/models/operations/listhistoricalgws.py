import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class ListHistoricalGwsColorEnum(str, Enum):
    RED = "red"
    WHITE = "white"
    PINK = "pink"

class ListHistoricalGwsOrderingEnum(str, Enum):
    DATE = "date"
    MINUS_DATE = "-date"
    SCORE = "score"
    MINUS_SCORE = "-score"


@dataclasses.dataclass
class ListHistoricalGwsQueryParams:
    color: Optional[ListHistoricalGwsColorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    is_primeurs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_primeurs', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lwin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lwin', 'style': 'form', 'explode': True }})
    lwin_11: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lwin_11', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[ListHistoricalGwsOrderingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    vintage: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vintage', 'style': 'form', 'explode': True }})
    wine_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'wine_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHistoricalGwsHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListHistoricalGwsRequest:
    headers: ListHistoricalGwsHeaders = dataclasses.field()
    query_params: ListHistoricalGwsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListHistoricalGwsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
