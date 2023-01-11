import dataclasses
from typing import Optional
from enum import Enum

class WeekUpcomingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class WeekUpcomingPathParams:
    format: WeekUpcomingFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WeekUpcomingRequest:
    path_params: WeekUpcomingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WeekUpcomingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    week_upcoming_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
