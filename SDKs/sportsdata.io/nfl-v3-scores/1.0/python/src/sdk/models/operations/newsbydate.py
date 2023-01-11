import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class NewsByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class NewsByDatePathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: NewsByDateFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NewsByDateRequest:
    path_params: NewsByDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsByDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    news: Optional[list[Any]] = dataclasses.field(default=None)
    
