import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
