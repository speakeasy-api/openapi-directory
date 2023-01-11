import dataclasses
from typing import Any,Optional
from enum import Enum

class CompetitionFixturesLeagueDetailsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class CompetitionFixturesLeagueDetailsPathParams:
    competition: str = dataclasses.field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    format: CompetitionFixturesLeagueDetailsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompetitionFixturesLeagueDetailsRequest:
    path_params: CompetitionFixturesLeagueDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CompetitionFixturesLeagueDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    competition_detail: Optional[Any] = dataclasses.field(default=None)
    
