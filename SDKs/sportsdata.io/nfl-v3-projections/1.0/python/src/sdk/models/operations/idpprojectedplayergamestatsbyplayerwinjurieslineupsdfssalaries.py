import dataclasses
from typing import Any,Optional
from enum import Enum

class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams:
    format: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest:
    path_params: IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_projection: Optional[Any] = dataclasses.field(default=None)
    
