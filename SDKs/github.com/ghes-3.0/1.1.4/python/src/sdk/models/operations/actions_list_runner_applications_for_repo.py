import dataclasses
from typing import Optional
from ..shared import runner_application as shared_runner_application


@dataclasses.dataclass
class ActionsListRunnerApplicationsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListRunnerApplicationsForRepoRequest:
    path_params: ActionsListRunnerApplicationsForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListRunnerApplicationsForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    runner_applications: Optional[list[shared_runner_application.RunnerApplication]] = dataclasses.field(default=None)
    
