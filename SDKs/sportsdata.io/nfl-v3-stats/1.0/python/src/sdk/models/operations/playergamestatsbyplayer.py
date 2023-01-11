import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerGameStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerGameStatsByPlayerPathParams:
    format: PlayerGameStatsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameStatsByPlayerRequest:
    path_params: PlayerGameStatsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameStatsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game: Optional[Any] = dataclasses.field(default=None)
    
