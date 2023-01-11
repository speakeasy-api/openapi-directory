import dataclasses
from typing import Optional
from enum import Enum

class SeasonUpcomingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class SeasonUpcomingPathParams:
    format: SeasonUpcomingFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SeasonUpcomingRequest:
    path_params: SeasonUpcomingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SeasonUpcomingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    season_upcoming_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
