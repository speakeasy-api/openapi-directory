import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetGlobalwinescoresLatestColorEnum(str, Enum):
    RED = "red"
    WHITE = "white"
    PINK = "pink"

class GetGlobalwinescoresLatestOrderingEnum(str, Enum):
    DATE = "date"
    MINUS_DATE = "-date"
    SCORE = "score"
    MINUS_SCORE = "-score"


@dataclasses.dataclass
class GetGlobalwinescoresLatestQueryParams:
    color: Optional[GetGlobalwinescoresLatestColorEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    is_primeurs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_primeurs', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lwin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lwin', 'style': 'form', 'explode': True }})
    lwin_11: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lwin_11', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    ordering: Optional[GetGlobalwinescoresLatestOrderingEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    vintage: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vintage', 'style': 'form', 'explode': True }})
    wine_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'wine_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGlobalwinescoresLatestHeaders:
    authorization: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGlobalwinescoresLatestRequest:
    headers: GetGlobalwinescoresLatestHeaders = dataclasses.field()
    query_params: GetGlobalwinescoresLatestQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGlobalwinescoresLatestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
