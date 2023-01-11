import dataclasses
from typing import Optional
from enum import Enum

class CurrentSeasontypeFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class CurrentSeasontypePathParams:
    format: CurrentSeasontypeFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CurrentSeasontypeRequest:
    path_params: CurrentSeasontypePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CurrentSeasontypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    current_seasontype_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
