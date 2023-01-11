import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ScoresByDateFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ScoresByDatePathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: ScoresByDateFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScoresByDateRequest:
    path_params: ScoresByDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScoresByDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scores: Optional[list[Any]] = dataclasses.field(default=None)
    
