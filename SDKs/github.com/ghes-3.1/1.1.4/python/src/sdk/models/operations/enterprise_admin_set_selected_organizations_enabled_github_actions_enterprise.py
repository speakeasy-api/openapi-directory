import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody:
    selected_organization_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organization_ids') }})
    

@dataclasses.dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams = dataclasses.field()
    request: Optional[EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
