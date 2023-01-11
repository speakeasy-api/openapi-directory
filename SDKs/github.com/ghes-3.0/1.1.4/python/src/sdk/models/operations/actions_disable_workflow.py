import dataclasses
from typing import Any


@dataclasses.dataclass
class ActionsDisableWorkflowPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    workflow_id: Any = dataclasses.field(metadata={'path_param': { 'field_name': 'workflow_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsDisableWorkflowRequest:
    path_params: ActionsDisableWorkflowPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsDisableWorkflowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
