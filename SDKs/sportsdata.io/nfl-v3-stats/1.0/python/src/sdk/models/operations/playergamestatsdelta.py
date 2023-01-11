import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerGameStatsDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerGameStatsDeltaPathParams:
    format: PlayerGameStatsDeltaFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerGameStatsDeltaRequest:
    path_params: PlayerGameStatsDeltaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerGameStatsDeltaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_games: Optional[list[Any]] = dataclasses.field(default=None)
    
