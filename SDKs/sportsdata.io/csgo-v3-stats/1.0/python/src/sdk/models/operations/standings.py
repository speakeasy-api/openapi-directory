import dataclasses
from typing import Any,Optional
from enum import Enum

class StandingsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class StandingsPathParams:
    format: StandingsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    roundid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'roundid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StandingsRequest:
    path_params: StandingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StandingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    standings: Optional[list[Any]] = dataclasses.field(default=None)
    
