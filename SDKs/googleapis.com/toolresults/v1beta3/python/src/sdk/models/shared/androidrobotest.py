import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AndroidRoboTest:
    r"""AndroidRoboTest
    A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.
    """
    
    app_initial_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInitialActivity') }})
    bootstrap_package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootstrapPackageId') }})
    bootstrap_runner_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootstrapRunnerClass') }})
    max_depth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDepth') }})
    max_steps: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSteps') }})
    
