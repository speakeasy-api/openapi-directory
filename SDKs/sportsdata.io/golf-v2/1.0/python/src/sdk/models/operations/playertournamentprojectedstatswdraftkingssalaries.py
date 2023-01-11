import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams:
    format: PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesRequest:
    path_params: PlayerTournamentProjectedStatsWDraftkingsSalariesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerTournamentProjectedStatsWDraftkingsSalariesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_tournament_projections: Optional[list[Any]] = dataclasses.field(default=None)
    
