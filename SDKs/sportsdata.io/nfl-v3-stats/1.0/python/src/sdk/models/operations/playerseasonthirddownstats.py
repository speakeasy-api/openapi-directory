import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonThirdDownStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerSeasonThirdDownStatsPathParams:
    format: PlayerSeasonThirdDownStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonThirdDownStatsRequest:
    path_params: PlayerSeasonThirdDownStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonThirdDownStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_season_third_downs: Optional[list[Any]] = dataclasses.field(default=None)
    
