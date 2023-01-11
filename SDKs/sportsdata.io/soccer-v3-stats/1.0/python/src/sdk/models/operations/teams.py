import dataclasses
from typing import Any,Optional
from enum import Enum

class TeamsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class TeamsPathParams:
    format: TeamsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsRequest:
    path_params: TeamsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[Any]] = dataclasses.field(default=None)
    
