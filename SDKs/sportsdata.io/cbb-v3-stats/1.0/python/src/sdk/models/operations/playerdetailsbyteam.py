import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerDetailsByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerDetailsByTeamPathParams:
    format: PlayerDetailsByTeamFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerDetailsByTeamRequest:
    path_params: PlayerDetailsByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerDetailsByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[Any]] = dataclasses.field(default=None)
    
