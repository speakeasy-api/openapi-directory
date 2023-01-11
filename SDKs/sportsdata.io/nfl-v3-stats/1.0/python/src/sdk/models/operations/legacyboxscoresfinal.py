import dataclasses
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoresFinalFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LegacyBoxScoresFinalPathParams:
    format: LegacyBoxScoresFinalFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LegacyBoxScoresFinalRequest:
    path_params: LegacyBoxScoresFinalPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LegacyBoxScoresFinalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
