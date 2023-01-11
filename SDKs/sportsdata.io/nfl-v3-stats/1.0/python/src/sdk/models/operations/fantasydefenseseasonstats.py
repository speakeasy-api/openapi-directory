import dataclasses
from typing import Any,Optional
from enum import Enum

class FantasyDefenseSeasonStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class FantasyDefenseSeasonStatsPathParams:
    format: FantasyDefenseSeasonStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FantasyDefenseSeasonStatsRequest:
    path_params: FantasyDefenseSeasonStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FantasyDefenseSeasonStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fantasy_defense_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
