import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class NewsByTeamPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NewsByTeamRequest:
    path_params: NewsByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    news: Optional[list[Any]] = dataclasses.field(default=None)
    
