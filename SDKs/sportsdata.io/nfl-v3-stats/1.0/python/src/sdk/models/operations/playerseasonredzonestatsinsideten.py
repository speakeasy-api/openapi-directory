import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonRedZoneStatsInsideTenFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerSeasonRedZoneStatsInsideTenPathParams:
    format: PlayerSeasonRedZoneStatsInsideTenFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonRedZoneStatsInsideTenRequest:
    path_params: PlayerSeasonRedZoneStatsInsideTenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonRedZoneStatsInsideTenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_red_zones: Optional[list[Any]] = dataclasses.field(default=None)
    
