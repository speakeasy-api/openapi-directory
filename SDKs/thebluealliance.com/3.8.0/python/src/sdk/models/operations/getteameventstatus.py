import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_event_status as shared_team_event_status


@dataclasses.dataclass
class GetTeamEventStatusPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventStatusHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventStatusSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamEventStatusRequest:
    headers: GetTeamEventStatusHeaders = dataclasses.field()
    path_params: GetTeamEventStatusPathParams = dataclasses.field()
    security: GetTeamEventStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamEventStatusResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_event_status: Optional[shared_team_event_status.TeamEventStatus] = dataclasses.field(default=None)
    
