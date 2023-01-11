import dataclasses
from typing import Optional
from ..shared import selected_actions as shared_selected_actions


@dataclasses.dataclass
class ActionsGetAllowedActionsRepositoryPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetAllowedActionsRepositoryRequest:
    path_params: ActionsGetAllowedActionsRepositoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetAllowedActionsRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    selected_actions: Optional[shared_selected_actions.SelectedActions] = dataclasses.field(default=None)
    
