import dataclasses
from typing import Any,Optional
from enum import Enum

class BoxScoresDeltaVFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"

class BoxScoresDeltaVPlayerstoincludeEnum(str, Enum):
    ALL = "all"
    FANTASY = "fantasy"
    IDP = "idp"


@dataclasses.dataclass
class BoxScoresDeltaVPathParams:
    format: BoxScoresDeltaVFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    minutes: str = dataclasses.field(metadata={'path_param': { 'field_name': 'minutes', 'style': 'simple', 'explode': False }})
    playerstoinclude: BoxScoresDeltaVPlayerstoincludeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'playerstoinclude', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoresDeltaVRequest:
    path_params: BoxScoresDeltaVPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoresDeltaVResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_score_v3s: Optional[list[Any]] = dataclasses.field(default=None)
    
