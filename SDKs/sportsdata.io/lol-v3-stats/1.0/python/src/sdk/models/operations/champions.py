import dataclasses
from typing import Any,Optional
from enum import Enum

class ChampionsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class ChampionsPathParams:
    format: ChampionsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ChampionsRequest:
    path_params: ChampionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ChampionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    champions: Optional[list[Any]] = dataclasses.field(default=None)
    
