import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerGameStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerGameStatsByTeamPathParams:
    format: PlayerGameStatsByTeamFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameStatsByTeamRequest:
    path_params: PlayerGameStatsByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameStatsByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_games: Optional[list[Any]] = dataclasses.field(default=None)
    
