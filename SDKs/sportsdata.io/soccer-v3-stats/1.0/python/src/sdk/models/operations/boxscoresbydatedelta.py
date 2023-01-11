import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class BoxScoresByDateDeltaFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class BoxScoresByDateDeltaPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: BoxScoresByDateDeltaFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoresByDateDeltaRequest:
    path_params: BoxScoresByDateDeltaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoresByDateDeltaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
