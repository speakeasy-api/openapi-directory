import dataclasses



@dataclasses.dataclass
class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
