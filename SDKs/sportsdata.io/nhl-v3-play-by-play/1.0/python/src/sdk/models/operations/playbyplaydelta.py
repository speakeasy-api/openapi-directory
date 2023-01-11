import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class PlayByPlayDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayByPlayDeltaPathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: PlayByPlayDeltaFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayByPlayDeltaRequest:
    path_params: PlayByPlayDeltaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayByPlayDeltaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_by_plays: Optional[list[Any]] = dataclasses.field(default=None)
    
