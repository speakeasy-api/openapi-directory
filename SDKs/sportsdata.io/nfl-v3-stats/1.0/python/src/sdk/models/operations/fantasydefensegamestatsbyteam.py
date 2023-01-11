import dataclasses
from typing import Any,Optional
from enum import Enum

class FantasyDefenseGameStatsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class FantasyDefenseGameStatsByTeamPathParams:
    format: FantasyDefenseGameStatsByTeamFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FantasyDefenseGameStatsByTeamRequest:
    path_params: FantasyDefenseGameStatsByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FantasyDefenseGameStatsByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fantasy_defense_game: Optional[Any] = dataclasses.field(default=None)
    
