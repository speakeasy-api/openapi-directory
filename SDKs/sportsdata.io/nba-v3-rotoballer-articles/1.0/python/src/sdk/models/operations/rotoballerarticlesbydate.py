import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class RotoballerArticlesByDateFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class RotoballerArticlesByDatePathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: RotoballerArticlesByDateFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RotoballerArticlesByDateRequest:
    path_params: RotoballerArticlesByDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RotoballerArticlesByDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[Any]] = dataclasses.field(default=None)
    
