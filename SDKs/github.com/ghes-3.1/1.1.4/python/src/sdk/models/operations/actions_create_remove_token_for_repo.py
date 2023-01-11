import dataclasses
from typing import Optional
from ..shared import authentication_token as shared_authentication_token


@dataclasses.dataclass
class ActionsCreateRemoveTokenForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsCreateRemoveTokenForRepoRequest:
    path_params: ActionsCreateRemoveTokenForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsCreateRemoveTokenForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authentication_token: Optional[shared_authentication_token.AuthenticationToken] = dataclasses.field(default=None)
    
