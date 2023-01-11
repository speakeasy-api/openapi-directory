import dataclasses
from typing import Any,Optional
from enum import Enum

class TimeframesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class TimeframesTypeEnum(str, Enum):
    CURRENT = "current"
    UPCOMING = "upcoming"
    COMPLETED = "completed"
    RECENT = "recent"
    ALL = "all"


@dataclasses.dataclass
class TimeframesPathParams:
    format: TimeframesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    type: TimeframesTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TimeframesRequest:
    path_params: TimeframesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TimeframesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timeframes: Optional[list[Any]] = dataclasses.field(default=None)
    
