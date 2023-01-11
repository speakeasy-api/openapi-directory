import dataclasses
from typing import Any,Optional
from enum import Enum

class BoxScoresVSimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class BoxScoresVSimulationPathParams:
    format: BoxScoresVSimulationFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BoxScoresVSimulationRequest:
    path_params: BoxScoresVSimulationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BoxScoresVSimulationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    box_score_v3s: Optional[list[Any]] = dataclasses.field(default=None)
    
