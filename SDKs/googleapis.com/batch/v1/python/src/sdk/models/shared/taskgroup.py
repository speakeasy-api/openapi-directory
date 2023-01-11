import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environment as shared_environment
from ..shared import taskspec as shared_taskspec


@dataclass_json
@dataclasses.dataclass
class TaskGroup:
    r"""TaskGroup
    A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parallelism: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    permissive_ssh: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissiveSsh') }})
    require_hosts_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHostsFile') }})
    task_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    task_count_per_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCountPerNode') }})
    task_environments: Optional[list[shared_environment.Environment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEnvironments') }})
    task_spec: Optional[shared_taskspec.TaskSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSpec') }})
    

@dataclass_json
@dataclasses.dataclass
class TaskGroupInput:
    r"""TaskGroupInput
    A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
    """
    
    parallelism: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    permissive_ssh: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissiveSsh') }})
    require_hosts_file: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireHostsFile') }})
    task_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    task_count_per_node: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCountPerNode') }})
    task_environments: Optional[list[shared_environment.Environment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEnvironments') }})
    task_spec: Optional[shared_taskspec.TaskSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSpec') }})
    
