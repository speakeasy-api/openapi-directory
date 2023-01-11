import dataclasses
from typing import Any,Optional
from enum import Enum

class ScheduleBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ScheduleBySeasonPathParams:
    format: ScheduleBySeasonFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScheduleBySeasonRequest:
    path_params: ScheduleBySeasonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScheduleBySeasonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tournaments: Optional[list[Any]] = dataclasses.field(default=None)
    
