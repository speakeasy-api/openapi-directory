import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team as shared_team


@dataclasses.dataclass
class GetTeamPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamRequest:
    headers: GetTeamHeaders = dataclasses.field()
    path_params: GetTeamPathParams = dataclasses.field()
    security: GetTeamSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team: Optional[shared_team.Team] = dataclasses.field(default=None)
    
