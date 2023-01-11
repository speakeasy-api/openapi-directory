import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamSeasonStatsStandingsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamSeasonStatsStandingsPathParams:
    format: TeamSeasonStatsStandingsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamSeasonStatsStandingsRequest:
    path_params: TeamSeasonStatsStandingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamSeasonStatsStandingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
