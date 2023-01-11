import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerDetailsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerDetailsByPlayerPathParams:
    format: PlayerDetailsByPlayerFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerDetailsByPlayerRequest:
    path_params: PlayerDetailsByPlayerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerDetailsByPlayerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_detail: Optional[Any] = dataclasses.field(default=None)
    
