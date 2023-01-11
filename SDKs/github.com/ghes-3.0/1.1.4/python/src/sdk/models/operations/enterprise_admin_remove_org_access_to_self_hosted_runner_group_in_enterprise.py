import dataclasses



@dataclasses.dataclass
class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
