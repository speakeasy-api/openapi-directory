import dataclasses
from typing import Any,Optional
from enum import Enum

class SchedulesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class SchedulesPathParams:
    format: SchedulesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SchedulesRequest:
    path_params: SchedulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SchedulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games: Optional[list[Any]] = dataclasses.field(default=None)
    
