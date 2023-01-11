import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import match as shared_match


@dataclasses.dataclass
class GetTeamMatchesByYearPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearRequest:
    headers: GetTeamMatchesByYearHeaders = dataclasses.field()
    path_params: GetTeamMatchesByYearPathParams = dataclasses.field()
    security: GetTeamMatchesByYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMatchesByYearResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    matches: Optional[list[shared_match.Match]] = dataclasses.field(default=None)
    
