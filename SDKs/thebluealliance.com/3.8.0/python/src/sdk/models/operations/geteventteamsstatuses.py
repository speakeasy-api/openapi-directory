import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_event_status as shared_team_event_status


@dataclasses.dataclass
class GetEventTeamsStatusesPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTeamsStatusesHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTeamsStatusesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventTeamsStatusesRequest:
    headers: GetEventTeamsStatusesHeaders = dataclasses.field()
    path_params: GetEventTeamsStatusesPathParams = dataclasses.field()
    security: GetEventTeamsStatusesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventTeamsStatusesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_event_teams_statuses_200_application_json_object: Optional[dict[str, shared_team_event_status.TeamEventStatus]] = dataclasses.field(default=None)
    
