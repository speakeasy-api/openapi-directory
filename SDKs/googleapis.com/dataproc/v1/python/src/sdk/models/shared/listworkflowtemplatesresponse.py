import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowtemplate as shared_workflowtemplate


@dataclass_json
@dataclasses.dataclass
class ListWorkflowTemplatesResponse:
    r"""ListWorkflowTemplatesResponse
    A response to a request to list workflow templates in a project.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    templates: Optional[list[shared_workflowtemplate.WorkflowTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    
