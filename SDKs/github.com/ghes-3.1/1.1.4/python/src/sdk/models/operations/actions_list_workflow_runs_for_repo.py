import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflow_run_status_enum as shared_workflow_run_status_enum
from ..shared import workflow_run as shared_workflow_run


@dataclasses.dataclass
class ActionsListWorkflowRunsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsListWorkflowRunsForRepoQueryParams:
    actor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'actor', 'style': 'form', 'explode': True }})
    branch: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'branch', 'style': 'form', 'explode': True }})
    event: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    status: Optional[shared_workflow_run_status_enum.WorkflowRunStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsListWorkflowRunsForRepo200ApplicationJSON:
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    workflow_runs: list[shared_workflow_run.WorkflowRun] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_runs') }})
    

@dataclasses.dataclass
class ActionsListWorkflowRunsForRepoRequest:
    path_params: ActionsListWorkflowRunsForRepoPathParams = dataclasses.field()
    query_params: ActionsListWorkflowRunsForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsListWorkflowRunsForRepoResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_list_workflow_runs_for_repo_200_application_json_object: Optional[ActionsListWorkflowRunsForRepo200ApplicationJSON] = dataclasses.field(default=None)
    
