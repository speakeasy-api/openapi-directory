import dataclasses
from typing import Any,Optional
from enum import Enum

class InjuriesByTeamFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class InjuriesByTeamPathParams:
    format: InjuriesByTeamFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InjuriesByTeamRequest:
    path_params: InjuriesByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InjuriesByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    injuries: Optional[list[Any]] = dataclasses.field(default=None)
    
