import dataclasses
from typing import Optional
from ..shared import team_project as shared_team_project


@dataclasses.dataclass
class TeamsCheckPermissionsForProjectInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectInOrgRequest:
    path_params: TeamsCheckPermissionsForProjectInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_project: Optional[shared_team_project.TeamProject] = dataclasses.field(default=None)
    
