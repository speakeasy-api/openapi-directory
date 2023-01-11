import dataclasses
from typing import Any,Optional
from enum import Enum

class BoxScoreFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class BoxScorePathParams:
    format: BoxScoreFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    gameid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'gameid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoreRequest:
    path_params: BoxScorePathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_score: Optional[Any] = dataclasses.field(default=None)
    
