import dataclasses
from typing import Optional
from ..shared import workflow_run as shared_workflow_run


@dataclasses.dataclass
class ActionsGetWorkflowRunPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetWorkflowRunRequest:
    path_params: ActionsGetWorkflowRunPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetWorkflowRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    workflow_run: Optional[shared_workflow_run.WorkflowRun] = dataclasses.field(default=None)
    
