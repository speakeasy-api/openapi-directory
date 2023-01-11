import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ByeWeeksPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ByeWeeksRequest:
    path_params: ByeWeeksPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ByeWeeksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    byes: Optional[list[Any]] = dataclasses.field(default=None)
    
