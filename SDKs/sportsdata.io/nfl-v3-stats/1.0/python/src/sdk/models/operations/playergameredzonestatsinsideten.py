import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerGameRedZoneStatsInsideTenFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerGameRedZoneStatsInsideTenPathParams:
    format: PlayerGameRedZoneStatsInsideTenFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameRedZoneStatsInsideTenRequest:
    path_params: PlayerGameRedZoneStatsInsideTenPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameRedZoneStatsInsideTenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_red_zones: Optional[list[Any]] = dataclasses.field(default=None)
    
