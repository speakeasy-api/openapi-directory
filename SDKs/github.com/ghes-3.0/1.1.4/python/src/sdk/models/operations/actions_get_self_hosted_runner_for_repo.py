import dataclasses
from typing import Optional
from ..shared import runner as shared_runner


@dataclasses.dataclass
class ActionsGetSelfHostedRunnerForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    runner_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetSelfHostedRunnerForRepoRequest:
    path_params: ActionsGetSelfHostedRunnerForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetSelfHostedRunnerForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner: Optional[shared_runner.Runner] = dataclasses.field(default=None)
    
