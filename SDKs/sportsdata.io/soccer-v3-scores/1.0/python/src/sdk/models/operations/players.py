import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayersFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class PlayersPathParams:
    format: PlayersFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayersRequest:
    path_params: PlayersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[Any]] = dataclasses.field(default=None)
    
