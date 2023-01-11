import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runner_groups_org as shared_runner_groups_org


@dataclasses.dataclass
class ActionsListSelfHostedRunnerGroupsForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnerGroupsForOrgQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON:
    runner_groups: list[shared_runner_groups_org.RunnerGroupsOrg] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runner_groups') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnerGroupsForOrgRequest:
    path_params: ActionsListSelfHostedRunnerGroupsForOrgPathParams = dataclasses.field()
    query_params: ActionsListSelfHostedRunnerGroupsForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListSelfHostedRunnerGroupsForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_self_hosted_runner_groups_for_org_200_application_json_object: Optional[ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON] = dataclasses.field(default=None)
    
