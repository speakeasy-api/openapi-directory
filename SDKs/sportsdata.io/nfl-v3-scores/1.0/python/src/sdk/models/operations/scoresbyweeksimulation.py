import dataclasses
from typing import Any,Optional
from enum import Enum

class ScoresByWeekSimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ScoresByWeekSimulationPathParams:
    format: ScoresByWeekSimulationFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScoresByWeekSimulationRequest:
    path_params: ScoresByWeekSimulationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ScoresByWeekSimulationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scores: Optional[list[Any]] = dataclasses.field(default=None)
    
