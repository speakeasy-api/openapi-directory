import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import team_robot as shared_team_robot


@dataclasses.dataclass
class GetTeamRobotsPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamRobotsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamRobotsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamRobotsRequest:
    headers: GetTeamRobotsHeaders = dataclasses.field()
    path_params: GetTeamRobotsPathParams = dataclasses.field()
    security: GetTeamRobotsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamRobotsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_robots: Optional[list[shared_team_robot.TeamRobot]] = dataclasses.field(default=None)
    
