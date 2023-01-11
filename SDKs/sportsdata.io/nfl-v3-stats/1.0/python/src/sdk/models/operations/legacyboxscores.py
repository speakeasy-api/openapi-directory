import dataclasses
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoresFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LegacyBoxScoresPathParams:
    format: LegacyBoxScoresFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LegacyBoxScoresRequest:
    path_params: LegacyBoxScoresPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LegacyBoxScoresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
