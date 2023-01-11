import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_event_status as shared_team_event_status


@dataclasses.dataclass
class GetTeamEventsStatusesByYearPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventsStatusesByYearHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventsStatusesByYearSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamEventsStatusesByYearRequest:
    headers: GetTeamEventsStatusesByYearHeaders = dataclasses.field()
    path_params: GetTeamEventsStatusesByYearPathParams = dataclasses.field()
    security: GetTeamEventsStatusesByYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamEventsStatusesByYearResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_team_events_statuses_by_year_200_application_json_object: Optional[dict[str, shared_team_event_status.TeamEventStatus]] = dataclasses.field(default=None)
    
