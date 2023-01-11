import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_simple as shared_team_simple


@dataclasses.dataclass
class GetEventTeamsSimplePathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTeamsSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTeamsSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventTeamsSimpleRequest:
    headers: GetEventTeamsSimpleHeaders = dataclasses.field()
    path_params: GetEventTeamsSimplePathParams = dataclasses.field()
    security: GetEventTeamsSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventTeamsSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_simples: Optional[list[shared_team_simple.TeamSimple]] = dataclasses.field(default=None)
    
