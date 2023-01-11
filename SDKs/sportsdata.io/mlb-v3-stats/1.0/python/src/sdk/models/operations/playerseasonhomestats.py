import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonHomeStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerSeasonHomeStatsPathParams:
    format: PlayerSeasonHomeStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonHomeStatsRequest:
    path_params: PlayerSeasonHomeStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonHomeStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
