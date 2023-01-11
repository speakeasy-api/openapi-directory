import dataclasses
from typing import Any,Optional
from enum import Enum

class BatterVsPitcherStatsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class BatterVsPitcherStatsPathParams:
    format: BatterVsPitcherStatsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hitterid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'hitterid', 'style': 'simple', 'explode': False }})
    pitcherid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'pitcherid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatterVsPitcherStatsRequest:
    path_params: BatterVsPitcherStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BatterVsPitcherStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_seasons: Optional[list[Any]] = dataclasses.field(default=None)
    
