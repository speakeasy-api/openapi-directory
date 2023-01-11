import dataclasses
from typing import Any,Optional
from enum import Enum

class FantasyPlayersWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class FantasyPlayersWithAdpPathParams:
    format: FantasyPlayersWithAdpFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FantasyPlayersWithAdpRequest:
    path_params: FantasyPlayersWithAdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FantasyPlayersWithAdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fantasy_players: Optional[list[Any]] = dataclasses.field(default=None)
    
