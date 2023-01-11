import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamScheduleFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamSchedulePathParams:
    format: TeamScheduleFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamScheduleRequest:
    path_params: TeamSchedulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games: Optional[list[Any]] = dataclasses.field(default=None)
    
