import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import barrier as shared_barrier
from ..shared import container as shared_container
from ..shared import environment as shared_environment
from ..shared import script as shared_script


@dataclass_json
@dataclasses.dataclass
class Runnable:
    r"""Runnable
    Runnable describes instructions for executing a specific script or container as part of a Task.
    """
    
    always_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alwaysRun') }})
    background: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    barrier: Optional[shared_barrier.Barrier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barrier') }})
    container: Optional[shared_container.Container] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    environment: Optional[shared_environment.Environment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    ignore_exit_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreExitStatus') }})
    script: Optional[shared_script.Script] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
