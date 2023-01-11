import dataclasses
from typing import Any,Optional
from enum import Enum

class MembershipsByCompetitionActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class MembershipsByCompetitionActivePathParams:
    competition: str = dataclasses.field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    format: MembershipsByCompetitionActiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MembershipsByCompetitionActiveRequest:
    path_params: MembershipsByCompetitionActivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class MembershipsByCompetitionActiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    memberships: Optional[list[Any]] = dataclasses.field(default=None)
    
