import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import minimal_repository as shared_minimal_repository
from ..shared import pull_request_minimal as shared_pull_request_minimal


@dataclass_json
@dataclasses.dataclass
class WorkflowRunSimpleCommitAuthor:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowRunSimpleCommitCommitter:
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowRunSimpleCommit:
    r"""WorkflowRunSimpleCommit
    Simple Commit
    """
    
    author: WorkflowRunSimpleCommitAuthor = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    committer: WorkflowRunSimpleCommitCommitter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tree_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tree_id') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowRun:
    r"""WorkflowRun
    An invocation of a workflow
    """
    
    artifacts_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifacts_url') }})
    cancel_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_url') }})
    check_suite_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_suite_url') }})
    conclusion: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conclusion') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    head_branch: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_branch') }})
    head_commit: WorkflowRunSimpleCommit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_commit') }})
    head_repository: shared_minimal_repository.MinimalRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_repository') }})
    head_sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_sha') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jobs_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs_url') }})
    logs_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs_url') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    pull_requests: list[shared_pull_request_minimal.PullRequestMinimal] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    repository: shared_minimal_repository.MinimalRepository = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    rerun_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rerun_url') }})
    run_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_number') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    workflow_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_id') }})
    workflow_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow_url') }})
    check_suite_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_suite_id') }})
    check_suite_node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_suite_node_id') }})
    head_repository_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_repository_id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
