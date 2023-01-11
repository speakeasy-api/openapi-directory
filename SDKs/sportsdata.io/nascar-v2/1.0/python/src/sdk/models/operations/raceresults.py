import dataclasses
from typing import Any,Optional
from enum import Enum

class RaceResultsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class RaceResultsPathParams:
    format: RaceResultsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    raceid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'raceid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RaceResultsRequest:
    path_params: RaceResultsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RaceResultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    race_result: Optional[Any] = dataclasses.field(default=None)
    
