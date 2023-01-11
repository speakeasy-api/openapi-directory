import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerSeasonSplitStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class PlayerSeasonSplitStatsSplitEnum(str, Enum):
    L = "L"
    R = "R"
    S = "S"


@dataclasses.dataclass
class PlayerSeasonSplitStatsPathParams:
    format: PlayerSeasonSplitStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    split: PlayerSeasonSplitStatsSplitEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'split', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerSeasonSplitStatsRequest:
    path_params: PlayerSeasonSplitStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerSeasonSplitStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
