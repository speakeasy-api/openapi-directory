import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tasktemplatespec as shared_tasktemplatespec


@dataclass_json
@dataclasses.dataclass
class ExecutionSpec:
    r"""ExecutionSpec
    ExecutionSpec describes how the execution will look.
    """
    
    parallelism: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    task_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    template: Optional[shared_tasktemplatespec.TaskTemplateSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
