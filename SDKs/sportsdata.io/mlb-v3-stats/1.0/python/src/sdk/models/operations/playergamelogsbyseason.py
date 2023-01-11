import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerGameLogsBySeasonFormatEnum(str, Enum):
    JSON = "JSON"
    XML = "XML"


@dataclasses.dataclass
class PlayerGameLogsBySeasonPathParams:
    format: PlayerGameLogsBySeasonFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofgames: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberofgames', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameLogsBySeasonRequest:
    path_params: PlayerGameLogsBySeasonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameLogsBySeasonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_games: Optional[list[Any]] = dataclasses.field(default=None)
    
