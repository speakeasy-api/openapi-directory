import dataclasses
from typing import Any,Optional
from enum import Enum

class LeagueLeadersByWeekColumnEnum(str, Enum):
    FANTASY_POINTS = "FantasyPoints"
    PASSING_YARDS = "PassingYards"
    RUSHING_YARDS = "RushingYards"
    RECEPTIONS = "Receptions"
    SACKS = "Sacks"
    INTERCEPTIONS = "Interceptions"
    TOUCHDOWNS = "Touchdowns"

class LeagueLeadersByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class LeagueLeadersByWeekPositionEnum(str, Enum):
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
class LeagueLeadersByWeekPathParams:
    column: LeagueLeadersByWeekColumnEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'column', 'style': 'simple', 'explode': False }})
    format: LeagueLeadersByWeekFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    position: LeagueLeadersByWeekPositionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LeagueLeadersByWeekRequest:
    path_params: LeagueLeadersByWeekPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LeagueLeadersByWeekResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_games: Optional[list[Any]] = dataclasses.field(default=None)
    
