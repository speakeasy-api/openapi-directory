import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskspec as shared_taskspec


@dataclass_json
@dataclasses.dataclass
class TaskTemplateSpec:
    r"""TaskTemplateSpec
    TaskTemplateSpec describes the data a task should have when created from a template.
    """
    
    spec: Optional[shared_taskspec.TaskSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
