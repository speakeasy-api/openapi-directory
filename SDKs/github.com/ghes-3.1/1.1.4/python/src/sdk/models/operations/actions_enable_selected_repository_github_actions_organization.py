import dataclasses



@dataclasses.dataclass
class ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest:
    path_params: ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
