import dataclasses
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams:
    format: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest:
    path_params: ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_projection: Optional[Any] = dataclasses.field(default=None)
    
