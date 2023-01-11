import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerDetailsByAvailableFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerDetailsByAvailablePathParams:
    format: PlayerDetailsByAvailableFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerDetailsByAvailableRequest:
    path_params: PlayerDetailsByAvailablePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerDetailsByAvailableResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[Any]] = dataclasses.field(default=None)
    
