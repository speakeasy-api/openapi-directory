import dataclasses
from typing import Any,Optional
from enum import Enum

class MembershipsByTeamActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class MembershipsByTeamActivePathParams:
    format: MembershipsByTeamActiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MembershipsByTeamActiveRequest:
    path_params: MembershipsByTeamActivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class MembershipsByTeamActiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    memberships: Optional[list[Any]] = dataclasses.field(default=None)
    
