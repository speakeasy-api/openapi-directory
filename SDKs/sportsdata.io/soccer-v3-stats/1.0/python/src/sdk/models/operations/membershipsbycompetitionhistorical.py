import dataclasses
from typing import Any,Optional
from enum import Enum

class MembershipsByCompetitionHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class MembershipsByCompetitionHistoricalPathParams:
    competition: str = dataclasses.field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    format: MembershipsByCompetitionHistoricalFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MembershipsByCompetitionHistoricalRequest:
    path_params: MembershipsByCompetitionHistoricalPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MembershipsByCompetitionHistoricalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    memberships: Optional[list[Any]] = dataclasses.field(default=None)
    
