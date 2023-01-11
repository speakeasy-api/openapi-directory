import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonRedZoneStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerSeasonRedZoneStatsPathParams:
    format: PlayerSeasonRedZoneStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonRedZoneStatsRequest:
    path_params: PlayerSeasonRedZoneStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonRedZoneStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_red_zones: Optional[list[Any]] = dataclasses.field(default=None)
    
