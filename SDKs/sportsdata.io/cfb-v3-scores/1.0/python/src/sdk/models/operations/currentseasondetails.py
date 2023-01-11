import dataclasses
from typing import Any,Optional
from enum import Enum

class CurrentSeasonDetailsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class CurrentSeasonDetailsPathParams:
    format: CurrentSeasonDetailsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CurrentSeasonDetailsRequest:
    path_params: CurrentSeasonDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CurrentSeasonDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    season: Optional[Any] = dataclasses.field(default=None)
    
