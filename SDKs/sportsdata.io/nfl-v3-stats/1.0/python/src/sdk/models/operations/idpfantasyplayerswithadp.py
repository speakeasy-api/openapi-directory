import dataclasses
from typing import Any,Optional
from enum import Enum

class IdpFantasyPlayersWithAdpFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class IdpFantasyPlayersWithAdpPathParams:
    format: IdpFantasyPlayersWithAdpFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IdpFantasyPlayersWithAdpRequest:
    path_params: IdpFantasyPlayersWithAdpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IdpFantasyPlayersWithAdpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fantasy_players: Optional[list[Any]] = dataclasses.field(default=None)
    
