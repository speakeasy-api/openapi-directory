import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import team_project as shared_team_project


@dataclasses.dataclass
class TeamsListProjectsLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListProjectsLegacyQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsListProjectsLegacy415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class TeamsListProjectsLegacyRequest:
    path_params: TeamsListProjectsLegacyPathParams = dataclasses.field()
    query_params: TeamsListProjectsLegacyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListProjectsLegacyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    team_projects: Optional[list[shared_team_project.TeamProject]] = dataclasses.field(default=None)
    teams_list_projects_legacy_415_application_json_object: Optional[TeamsListProjectsLegacy415ApplicationJSON] = dataclasses.field(default=None)
    
