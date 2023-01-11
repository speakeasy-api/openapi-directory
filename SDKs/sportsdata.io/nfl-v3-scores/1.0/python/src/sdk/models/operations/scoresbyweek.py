import dataclasses
from typing import Any,Optional
from enum import Enum

class ScoresByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ScoresByWeekPathParams:
    format: ScoresByWeekFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScoresByWeekRequest:
    path_params: ScoresByWeekPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScoresByWeekResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scores: Optional[list[Any]] = dataclasses.field(default=None)
    
