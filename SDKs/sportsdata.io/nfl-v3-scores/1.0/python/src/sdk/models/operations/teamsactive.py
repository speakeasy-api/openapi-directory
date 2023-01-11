import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamsActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class TeamsActivePathParams:
    format: TeamsActiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsActiveRequest:
    path_params: TeamsActivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsActiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[Any]] = dataclasses.field(default=None)
    
