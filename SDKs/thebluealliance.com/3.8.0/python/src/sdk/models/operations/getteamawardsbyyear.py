import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import award as shared_award


@dataclasses.dataclass
class GetTeamAwardsByYearPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamAwardsByYearHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamAwardsByYearSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamAwardsByYearRequest:
    headers: GetTeamAwardsByYearHeaders = dataclasses.field()
    path_params: GetTeamAwardsByYearPathParams = dataclasses.field()
    security: GetTeamAwardsByYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamAwardsByYearResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    awards: Optional[list[shared_award.Award]] = dataclasses.field(default=None)
    
