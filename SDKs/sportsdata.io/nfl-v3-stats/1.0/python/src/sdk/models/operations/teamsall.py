import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class TeamsAllPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsAllRequest:
    path_params: TeamsAllPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[Any]] = dataclasses.field(default=None)
    
