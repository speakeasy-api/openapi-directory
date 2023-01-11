import dataclasses
from typing import Any,Optional
from enum import Enum

class SeriesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class SeriesPathParams:
    format: SeriesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SeriesRequest:
    path_params: SeriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SeriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    series: Optional[list[Any]] = dataclasses.field(default=None)
    
