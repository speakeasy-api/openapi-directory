import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerDetailsByFreeAgentsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerDetailsByFreeAgentsPathParams:
    format: PlayerDetailsByFreeAgentsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerDetailsByFreeAgentsRequest:
    path_params: PlayerDetailsByFreeAgentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerDetailsByFreeAgentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[Any]] = dataclasses.field(default=None)
    
