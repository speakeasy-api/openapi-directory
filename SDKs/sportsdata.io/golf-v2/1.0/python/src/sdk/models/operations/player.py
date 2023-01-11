import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerPathParams:
    format: PlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerRequest:
    path_params: PlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player: Optional[Any] = dataclasses.field(default=None)
    
