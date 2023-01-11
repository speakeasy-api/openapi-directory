import dataclasses
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoresDeltaFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LegacyBoxScoresDeltaPathParams:
    format: LegacyBoxScoresDeltaFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LegacyBoxScoresDeltaRequest:
    path_params: LegacyBoxScoresDeltaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LegacyBoxScoresDeltaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
