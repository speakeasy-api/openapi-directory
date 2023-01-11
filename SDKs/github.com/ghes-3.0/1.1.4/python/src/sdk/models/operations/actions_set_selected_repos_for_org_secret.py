import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsSetSelectedReposForOrgSecretPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsSetSelectedReposForOrgSecretRequestBody:
    selected_repository_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    

@dataclasses.dataclass
class ActionsSetSelectedReposForOrgSecretRequest:
    path_params: ActionsSetSelectedReposForOrgSecretPathParams = dataclasses.field()
    request: Optional[ActionsSetSelectedReposForOrgSecretRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetSelectedReposForOrgSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
