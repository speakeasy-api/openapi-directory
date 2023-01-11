import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody:
    selected_repository_ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    

@dataclasses.dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams = dataclasses.field()
    request: Optional[ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
