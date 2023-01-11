import dataclasses
from typing import Optional
from ..shared import actions_secret as shared_actions_secret


@dataclasses.dataclass
class ActionsGetRepoSecretPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetRepoSecretRequest:
    path_params: ActionsGetRepoSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetRepoSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_secret: Optional[shared_actions_secret.ActionsSecret] = dataclasses.field(default=None)
    
