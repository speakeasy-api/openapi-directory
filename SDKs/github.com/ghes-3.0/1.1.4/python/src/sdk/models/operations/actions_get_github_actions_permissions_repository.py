import dataclasses
from typing import Optional
from ..shared import actions_repository_permissions as shared_actions_repository_permissions


@dataclasses.dataclass
class ActionsGetGithubActionsPermissionsRepositoryPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetGithubActionsPermissionsRepositoryRequest:
    path_params: ActionsGetGithubActionsPermissionsRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetGithubActionsPermissionsRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_repository_permissions: Optional[shared_actions_repository_permissions.ActionsRepositoryPermissions] = dataclasses.field(default=None)
    
