import dataclasses
from typing import Any,Optional
from enum import Enum

class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams:
    format: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest:
    path_params: IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_game_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
