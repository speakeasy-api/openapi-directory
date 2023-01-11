import dataclasses
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoresLiveFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LegacyBoxScoresLivePathParams:
    format: LegacyBoxScoresLiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LegacyBoxScoresLiveRequest:
    path_params: LegacyBoxScoresLivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class LegacyBoxScoresLiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
