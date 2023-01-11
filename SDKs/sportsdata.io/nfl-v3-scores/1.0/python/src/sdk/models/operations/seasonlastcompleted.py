import dataclasses
from typing import Optional
from enum import Enum

class SeasonLastCompletedFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class SeasonLastCompletedPathParams:
    format: SeasonLastCompletedFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SeasonLastCompletedRequest:
    path_params: SeasonLastCompletedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SeasonLastCompletedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    season_last_completed_200_application_json_integer: Optional[int] = dataclasses.field(default=None)
    
