import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayerDetailsByActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayerDetailsByActivePathParams:
    format: PlayerDetailsByActiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayerDetailsByActiveRequest:
    path_params: PlayerDetailsByActivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayerDetailsByActiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    players: Optional[list[Any]] = dataclasses.field(default=None)
    
