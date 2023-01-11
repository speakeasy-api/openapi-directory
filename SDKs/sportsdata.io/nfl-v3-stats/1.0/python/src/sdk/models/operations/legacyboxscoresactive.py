import dataclasses
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoresActiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LegacyBoxScoresActivePathParams:
    format: LegacyBoxScoresActiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LegacyBoxScoresActiveRequest:
    path_params: LegacyBoxScoresActivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class LegacyBoxScoresActiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
