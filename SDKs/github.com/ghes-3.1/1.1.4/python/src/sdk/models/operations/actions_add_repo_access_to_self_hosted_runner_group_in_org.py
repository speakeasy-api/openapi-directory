import dataclasses



@dataclasses.dataclass
class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
