import dataclasses
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsByTeamWByeWeekAdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
