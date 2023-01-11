import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonStatsByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class PlayerSeasonStatsByPlayerPathParams:
    format: PlayerSeasonStatsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    roundid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonStatsByPlayerRequest:
    path_params: PlayerSeasonStatsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonStatsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
