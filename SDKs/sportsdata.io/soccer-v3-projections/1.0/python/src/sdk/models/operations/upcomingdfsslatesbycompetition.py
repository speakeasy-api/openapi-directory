import dataclasses
from typing import Any,Optional
from enum import Enum

class UpcomingDfsSlatesByCompetitionFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class UpcomingDfsSlatesByCompetitionPathParams:
    competition_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'competitionId', 'style': 'simple', 'explode': False }})
    format: UpcomingDfsSlatesByCompetitionFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpcomingDfsSlatesByCompetitionRequest:
    path_params: UpcomingDfsSlatesByCompetitionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UpcomingDfsSlatesByCompetitionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dfs_slates: Optional[list[Any]] = dataclasses.field(default=None)
    
