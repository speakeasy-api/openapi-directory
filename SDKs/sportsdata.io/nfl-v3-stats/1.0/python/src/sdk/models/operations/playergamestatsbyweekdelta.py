import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerGameStatsByWeekDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerGameStatsByWeekDeltaPathParams:
    format: PlayerGameStatsByWeekDeltaFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameStatsByWeekDeltaRequest:
    path_params: PlayerGameStatsByWeekDeltaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameStatsByWeekDeltaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_games: Optional[list[Any]] = dataclasses.field(default=None)
    
