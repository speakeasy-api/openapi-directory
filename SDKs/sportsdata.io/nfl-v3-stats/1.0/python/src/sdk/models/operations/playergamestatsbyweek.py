import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerGameStatsByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerGameStatsByWeekPathParams:
    format: PlayerGameStatsByWeekFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameStatsByWeekRequest:
    path_params: PlayerGameStatsByWeekPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameStatsByWeekResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_games: Optional[list[Any]] = dataclasses.field(default=None)
    
