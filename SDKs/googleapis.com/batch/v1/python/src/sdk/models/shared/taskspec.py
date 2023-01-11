import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeresource as shared_computeresource
from ..shared import environment as shared_environment
from ..shared import lifecyclepolicy as shared_lifecyclepolicy
from ..shared import runnable as shared_runnable
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class TaskSpec:
    r"""TaskSpec
    Spec of a task
    """
    
    compute_resource: Optional[shared_computeresource.ComputeResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeResource') }})
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    environments: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    lifecycle_policies: Optional[list[shared_lifecyclepolicy.LifecyclePolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecyclePolicies') }})
    max_retry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetryCount') }})
    max_run_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRunDuration') }})
    runnables: Optional[list[shared_runnable.Runnable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runnables') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
