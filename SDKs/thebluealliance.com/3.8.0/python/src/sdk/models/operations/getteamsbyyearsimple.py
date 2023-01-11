import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_simple as shared_team_simple


@dataclasses.dataclass
class GetTeamsByYearSimplePathParams:
    page_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsByYearSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsByYearSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamsByYearSimpleRequest:
    headers: GetTeamsByYearSimpleHeaders = dataclasses.field()
    path_params: GetTeamsByYearSimplePathParams = dataclasses.field()
    security: GetTeamsByYearSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsByYearSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_simples: Optional[list[shared_team_simple.TeamSimple]] = dataclasses.field(default=None)
    
