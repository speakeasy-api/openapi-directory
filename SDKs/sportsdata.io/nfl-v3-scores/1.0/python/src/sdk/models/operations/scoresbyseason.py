import dataclasses
from typing import Any,Optional
from enum import Enum

class ScoresBySeasonFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ScoresBySeasonPathParams:
    format: ScoresBySeasonFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScoresBySeasonRequest:
    path_params: ScoresBySeasonPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScoresBySeasonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scores: Optional[list[Any]] = dataclasses.field(default=None)
    
