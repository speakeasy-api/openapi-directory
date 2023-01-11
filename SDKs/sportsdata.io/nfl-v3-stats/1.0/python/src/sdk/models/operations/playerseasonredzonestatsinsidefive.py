import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonRedZoneStatsInsideFiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerSeasonRedZoneStatsInsideFivePathParams:
    format: PlayerSeasonRedZoneStatsInsideFiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonRedZoneStatsInsideFiveRequest:
    path_params: PlayerSeasonRedZoneStatsInsideFivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonRedZoneStatsInsideFiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_red_zones: Optional[list[Any]] = dataclasses.field(default=None)
    
