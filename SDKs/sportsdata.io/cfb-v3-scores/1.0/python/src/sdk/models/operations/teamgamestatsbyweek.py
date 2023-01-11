import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamGameStatsByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamGameStatsByWeekPathParams:
    format: TeamGameStatsByWeekFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamGameStatsByWeekRequest:
    path_params: TeamGameStatsByWeekPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamGameStatsByWeekResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_games: Optional[list[Any]] = dataclasses.field(default=None)
    
