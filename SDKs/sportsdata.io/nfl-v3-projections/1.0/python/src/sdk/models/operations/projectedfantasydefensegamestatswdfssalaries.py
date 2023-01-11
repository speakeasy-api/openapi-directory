import dataclasses
from typing import Any,Optional
from enum import Enum

class ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams:
    format: ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesRequest:
    path_params: ProjectedFantasyDefenseGameStatsWDfsSalariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedFantasyDefenseGameStatsWDfsSalariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fantasy_defense_game_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
