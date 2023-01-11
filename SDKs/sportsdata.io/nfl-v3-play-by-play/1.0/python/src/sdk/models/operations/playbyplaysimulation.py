import dataclasses
from typing import Any,Optional
from enum import Enum

class PlayByPlaySimulationFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class PlayByPlaySimulationPathParams:
    format: PlayByPlaySimulationFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    numberofplays: str = dataclasses.field(metadata={'path_param': { 'field_name': 'numberofplays', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlayByPlaySimulationRequest:
    path_params: PlayByPlaySimulationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlayByPlaySimulationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    play_by_plays: Optional[list[Any]] = dataclasses.field(default=None)
    
