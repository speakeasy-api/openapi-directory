import dataclasses
from typing import Any,Optional
from enum import Enum

class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams:
    format: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest:
    path_params: GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games: Optional[list[Any]] = dataclasses.field(default=None)
    
