import dataclasses
from typing import Any,Optional
from enum import Enum

class ProjectedPlayerSeasonStatsWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ProjectedPlayerSeasonStatsWithAdpPathParams:
    format: ProjectedPlayerSeasonStatsWithAdpFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsWithAdpRequest:
    path_params: ProjectedPlayerSeasonStatsWithAdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectedPlayerSeasonStatsWithAdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
