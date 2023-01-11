import dataclasses
from typing import Any,Optional
from enum import Enum

class RacesScheduleFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class RacesSchedulePathParams:
    format: RacesScheduleFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RacesScheduleRequest:
    path_params: RacesSchedulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RacesScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    races: Optional[list[Any]] = dataclasses.field(default=None)
    
