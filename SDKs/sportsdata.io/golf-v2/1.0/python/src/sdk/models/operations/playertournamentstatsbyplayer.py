import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerTournamentStatsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerTournamentStatsByPlayerPathParams:
    format: PlayerTournamentStatsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    tournamentid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerTournamentStatsByPlayerRequest:
    path_params: PlayerTournamentStatsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerTournamentStatsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_tournament: Optional[Any] = dataclasses.field(default=None)
    
