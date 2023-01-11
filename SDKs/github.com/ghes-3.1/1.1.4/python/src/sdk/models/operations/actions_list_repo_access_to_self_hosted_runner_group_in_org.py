import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository as shared_repository


@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON:
    repositories: list[shared_repository.Repository] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams = dataclasses.field()
    query_params: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_repo_access_to_self_hosted_runner_group_in_org_200_application_json_object: Optional[ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON] = dataclasses.field(default=None)
    
