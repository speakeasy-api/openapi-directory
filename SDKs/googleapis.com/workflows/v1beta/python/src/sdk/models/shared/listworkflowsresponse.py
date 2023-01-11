import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflow as shared_workflow


@dataclass_json
@dataclasses.dataclass
class ListWorkflowsResponse:
    r"""ListWorkflowsResponse
    Response for the ListWorkflows method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    workflows: Optional[list[shared_workflow.Workflow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflows') }})
    
