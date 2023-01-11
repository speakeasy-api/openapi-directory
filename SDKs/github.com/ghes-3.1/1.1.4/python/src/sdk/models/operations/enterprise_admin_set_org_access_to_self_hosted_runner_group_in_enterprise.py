import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody:
    selected_organization_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organization_ids') }})
    

@dataclasses.dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = dataclasses.field()
    request: Optional[EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
