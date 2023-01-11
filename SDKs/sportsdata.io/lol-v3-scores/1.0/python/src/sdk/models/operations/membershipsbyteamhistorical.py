import dataclasses
from typing import Any,Optional
from enum import Enum

class MembershipsByTeamHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class MembershipsByTeamHistoricalPathParams:
    format: MembershipsByTeamHistoricalFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MembershipsByTeamHistoricalRequest:
    path_params: MembershipsByTeamHistoricalPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MembershipsByTeamHistoricalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    memberships: Optional[list[Any]] = dataclasses.field(default=None)
    
