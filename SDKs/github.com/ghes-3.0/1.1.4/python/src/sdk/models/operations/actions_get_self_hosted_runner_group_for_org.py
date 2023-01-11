import dataclasses
from typing import Optional
from ..shared import runner_groups_org as shared_runner_groups_org


@dataclasses.dataclass
class ActionsGetSelfHostedRunnerGroupForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsGetSelfHostedRunnerGroupForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetSelfHostedRunnerGroupForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_groups_org: Optional[shared_runner_groups_org.RunnerGroupsOrg] = dataclasses.field(default=None)
    
