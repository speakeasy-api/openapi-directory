import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team as shared_team


@dataclasses.dataclass
class GetTeamsPathParams:
    page_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamsRequest:
    headers: GetTeamsHeaders = dataclasses.field()
    path_params: GetTeamsPathParams = dataclasses.field()
    security: GetTeamsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    
