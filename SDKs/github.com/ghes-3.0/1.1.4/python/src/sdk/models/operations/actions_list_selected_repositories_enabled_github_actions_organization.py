import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclasses.dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON:
    repositories: list[shared_repository.Repository] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest:
    path_params: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams = dataclasses.field()
    query_params: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_selected_repositories_enabled_github_actions_organization_200_application_json_object: Optional[ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJSON] = dataclasses.field(default=None)
    
