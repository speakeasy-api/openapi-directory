import dataclasses
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoresDeltaCurrentWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LegacyBoxScoresDeltaCurrentWeekPathParams:
    format: LegacyBoxScoresDeltaCurrentWeekFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LegacyBoxScoresDeltaCurrentWeekRequest:
    path_params: LegacyBoxScoresDeltaCurrentWeekPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LegacyBoxScoresDeltaCurrentWeekResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_scores: Optional[list[Any]] = dataclasses.field(default=None)
    
