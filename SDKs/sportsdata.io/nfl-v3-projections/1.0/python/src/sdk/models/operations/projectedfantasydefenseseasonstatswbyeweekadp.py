import dataclasses
from typing import Any,Optional
from enum import Enum

class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams:
    format: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest:
    path_params: ProjectedFantasyDefenseSeasonStatsWByeWeekAdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fantasy_defense_season_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
