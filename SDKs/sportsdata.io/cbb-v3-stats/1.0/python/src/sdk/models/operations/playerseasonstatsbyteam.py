import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerSeasonStatsByTeamPathParams:
    format: PlayerSeasonStatsByTeamFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonStatsByTeamRequest:
    path_params: PlayerSeasonStatsByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonStatsByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
