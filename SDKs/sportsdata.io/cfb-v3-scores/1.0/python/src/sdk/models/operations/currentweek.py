import dataclasses
from typing import Optional
from enum import Enum

class CurrentWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class CurrentWeekPathParams:
    format: CurrentWeekFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CurrentWeekRequest:
    path_params: CurrentWeekPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CurrentWeekResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    current_week_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
