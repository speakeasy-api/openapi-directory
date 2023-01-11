import dataclasses
from typing import Any,Optional
from enum import Enum

class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams:
    format: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest:
    path_params: GameStatsByWeekDeprecatedUseTeamGameStatsInsteadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games: Optional[list[Any]] = dataclasses.field(default=None)
    
