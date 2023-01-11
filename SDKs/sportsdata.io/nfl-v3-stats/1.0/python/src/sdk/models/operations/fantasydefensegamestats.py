import dataclasses
from typing import Any,Optional
from enum import Enum

class FantasyDefenseGameStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class FantasyDefenseGameStatsPathParams:
    format: FantasyDefenseGameStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FantasyDefenseGameStatsRequest:
    path_params: FantasyDefenseGameStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FantasyDefenseGameStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fantasy_defense_games: Optional[list[Any]] = dataclasses.field(default=None)
    
