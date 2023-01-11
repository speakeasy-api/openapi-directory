import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class TimeframesPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TimeframesRequest:
    path_params: TimeframesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TimeframesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    timeframes: Optional[list[Any]] = dataclasses.field(default=None)
    
