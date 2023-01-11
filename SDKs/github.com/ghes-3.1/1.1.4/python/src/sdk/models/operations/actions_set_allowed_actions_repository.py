import dataclasses
from typing import Optional
from ..shared import selected_actions as shared_selected_actions


@dataclasses.dataclass
class ActionsSetAllowedActionsRepositoryPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsSetAllowedActionsRepositoryRequest:
    path_params: ActionsSetAllowedActionsRepositoryPathParams = dataclasses.field()
    request: Optional[shared_selected_actions.SelectedActions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetAllowedActionsRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
