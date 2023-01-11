import dataclasses
from typing import Optional
from enum import Enum

class WeekCurrentFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class WeekCurrentPathParams:
    format: WeekCurrentFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WeekCurrentRequest:
    path_params: WeekCurrentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WeekCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    week_current_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
