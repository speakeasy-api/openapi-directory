import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTeamYearsParticipatedPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamYearsParticipatedHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamYearsParticipatedSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamYearsParticipatedRequest:
    headers: GetTeamYearsParticipatedHeaders = dataclasses.field()
    path_params: GetTeamYearsParticipatedPathParams = dataclasses.field()
    security: GetTeamYearsParticipatedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamYearsParticipatedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_team_years_participated_200_application_json_integers: Optional[list[int]] = dataclasses.field(default=None)
    
