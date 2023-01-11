import dataclasses
from typing import Any,Optional
from enum import Enum

class LeaderboardFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LeaderboardPathParams:
    format: LeaderboardFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LeaderboardRequest:
    path_params: LeaderboardPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LeaderboardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    leaderboard: Optional[Any] = dataclasses.field(default=None)
    
