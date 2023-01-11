import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_simple as shared_team_simple


@dataclasses.dataclass
class GetTeamsSimplePathParams:
    page_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamsSimpleRequest:
    headers: GetTeamsSimpleHeaders = dataclasses.field()
    path_params: GetTeamsSimplePathParams = dataclasses.field()
    security: GetTeamsSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_simples: Optional[list[shared_team_simple.TeamSimple]] = dataclasses.field(default=None)
    
