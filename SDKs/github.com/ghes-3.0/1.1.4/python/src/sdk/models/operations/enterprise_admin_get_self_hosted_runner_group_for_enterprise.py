import dataclasses
from typing import Optional
from ..shared import runner_groups_enterprise as shared_runner_groups_enterprise


@dataclasses.dataclass
class EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest:
    path_params: EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_groups_enterprise: Optional[shared_runner_groups_enterprise.RunnerGroupsEnterprise] = dataclasses.field(default=None)
    
