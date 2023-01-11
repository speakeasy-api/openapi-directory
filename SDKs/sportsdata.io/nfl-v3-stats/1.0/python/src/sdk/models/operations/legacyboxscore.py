import dataclasses
from typing import Any,Optional
from enum import Enum

class LegacyBoxScoreFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class LegacyBoxScorePathParams:
    format: LegacyBoxScoreFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    hometeam: str = dataclasses.field(metadata={'path_param': { 'field_name': 'hometeam', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LegacyBoxScoreRequest:
    path_params: LegacyBoxScorePathParams = dataclasses.field()
    

@dataclasses.dataclass
class LegacyBoxScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_score: Optional[Any] = dataclasses.field(default=None)
    
