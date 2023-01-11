import dataclasses
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsWByeWeekAdpFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsWByeWeekAdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsWByeWeekAdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
