import dataclasses
from typing import Any,Optional
from enum import Enum

class PremiumNewsByTeamFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class PremiumNewsByTeamPathParams:
    format: PremiumNewsByTeamFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PremiumNewsByTeamRequest:
    path_params: PremiumNewsByTeamPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PremiumNewsByTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    news: Optional[list[Any]] = dataclasses.field(default=None)
    
