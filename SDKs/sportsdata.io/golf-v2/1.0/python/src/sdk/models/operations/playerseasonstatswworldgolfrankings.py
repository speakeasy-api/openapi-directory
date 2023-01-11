import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonStatsWWorldGolfRankingsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerSeasonStatsWWorldGolfRankingsPathParams:
    format: PlayerSeasonStatsWWorldGolfRankingsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonStatsWWorldGolfRankingsRequest:
    path_params: PlayerSeasonStatsWWorldGolfRankingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonStatsWWorldGolfRankingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
