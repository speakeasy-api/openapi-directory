import dataclasses
from typing import Optional
from ..shared import repository_pre_receive_hook as shared_repository_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveHookForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveHookForRepoRequest:
    path_params: EnterpriseAdminGetPreReceiveHookForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveHookForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    repository_pre_receive_hook: Optional[shared_repository_pre_receive_hook.RepositoryPreReceiveHook] = dataclasses.field(default=None)
    
