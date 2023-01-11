import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization_simple as shared_organization_simple


@dataclasses.dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON:
    organizations: list[shared_organization_simple.OrganizationSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = dataclasses.field()
    query_params: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_list_org_access_to_self_hosted_runner_group_in_enterprise_200_application_json_object: Optional[EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON] = dataclasses.field(default=None)
    
