import dataclasses
from typing import Any,Optional
from enum import Enum

class ScheduleFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class SchedulePathParams:
    format: ScheduleFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScheduleRequest:
    path_params: SchedulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tournaments: Optional[list[Any]] = dataclasses.field(default=None)
    
