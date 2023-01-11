import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class BoxScoresByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class BoxScoresByDatePathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoresByDateRequest:
    path_params: BoxScoresByDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoresByDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
