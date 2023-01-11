import dataclasses
from typing import Any,Optional
from enum import Enum

class LeagueLeadersBySeasonColumnEnum(str, Enum):
    FANTASY_POINTS = "FantasyPoints"
    PASSING_YARDS = "PassingYards"
    RUSHING_YARDS = "RushingYards"
    RECEPTIONS = "Receptions"
    SACKS = "Sacks"
    INTERCEPTIONS = "Interceptions"
    TOUCHDOWNS = "Touchdowns"

class LeagueLeadersBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class LeagueLeadersBySeasonPositionEnum(str, Enum):
    ALL = "ALL"
    OFFENSE = "OFFENSE"
    QB = "QB"
    RB = "RB"
    WR = "WR"
    TE = "TE"
    DEFENSE = "DEFENSE"
    DL = "DL"
    LB = "LB"
    DB = "DB"
    K = "K"


@dataclasses.dataclass
class LeagueLeadersBySeasonPathParams:
    column: LeagueLeadersBySeasonColumnEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'column', 'style': 'simple', 'explode': False }})
    format: LeagueLeadersBySeasonFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    position: LeagueLeadersBySeasonPositionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LeagueLeadersBySeasonRequest:
    path_params: LeagueLeadersBySeasonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LeagueLeadersBySeasonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
