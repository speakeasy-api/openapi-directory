import dataclasses



@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerFromRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerFromRepoRequest:
    path_params: ActionsDeleteSelfHostedRunnerFromRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDeleteSelfHostedRunnerFromRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
