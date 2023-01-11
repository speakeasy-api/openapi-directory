import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jira_priority_mapping as shared_jira_priority_mapping
from ..shared import jira_status_mapping as shared_jira_status_mapping


@dataclass_json
@dataclasses.dataclass
class JiraScope:
    allow_jira: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_jira') }})
    auto_sync: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_sync') }})
    issue_type_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_type_id') }})
    priority_mapping: Optional[shared_jira_priority_mapping.JiraPriorityMapping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority_mapping') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_id') }})
    status_mapping: Optional[shared_jira_status_mapping.JiraStatusMapping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_mapping') }})
    
