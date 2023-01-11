import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayersByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayersByTeamPathParams:
    format: PlayersByTeamFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayersByTeamRequest:
    path_params: PlayersByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayersByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[Any]] = dataclasses.field(default=None)
    
