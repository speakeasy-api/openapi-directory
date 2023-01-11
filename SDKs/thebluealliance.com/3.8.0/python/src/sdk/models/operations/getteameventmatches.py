import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import match as shared_match


@dataclasses.dataclass
class GetTeamEventMatchesPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventMatchesHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventMatchesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamEventMatchesRequest:
    headers: GetTeamEventMatchesHeaders = dataclasses.field()
    path_params: GetTeamEventMatchesPathParams = dataclasses.field()
    security: GetTeamEventMatchesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamEventMatchesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    matches: Optional[list[shared_match.Match]] = dataclasses.field(default=None)
    
