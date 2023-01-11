import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_simple as shared_team_simple


@dataclasses.dataclass
class GetTeamSimplePathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamSimpleRequest:
    headers: GetTeamSimpleHeaders = dataclasses.field()
    path_params: GetTeamSimplePathParams = dataclasses.field()
    security: GetTeamSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_simple: Optional[shared_team_simple.TeamSimple] = dataclasses.field(default=None)
    
