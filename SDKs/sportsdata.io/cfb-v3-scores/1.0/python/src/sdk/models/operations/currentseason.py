import dataclasses
from typing import Optional
from enum import Enum

class CurrentSeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class CurrentSeasonPathParams:
    format: CurrentSeasonFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CurrentSeasonRequest:
    path_params: CurrentSeasonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CurrentSeasonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    current_season_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
