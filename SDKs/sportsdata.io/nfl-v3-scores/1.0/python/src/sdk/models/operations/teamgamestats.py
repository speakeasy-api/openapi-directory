import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamGameStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamGameStatsPathParams:
    format: TeamGameStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamGameStatsRequest:
    path_params: TeamGameStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamGameStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_games: Optional[list[Any]] = dataclasses.field(default=None)
    
