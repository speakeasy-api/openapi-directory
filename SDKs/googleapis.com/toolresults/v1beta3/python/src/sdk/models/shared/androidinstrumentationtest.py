import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AndroidInstrumentationTest:
    r"""AndroidInstrumentationTest
    A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.
    """
    
    test_package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testPackageId') }})
    test_runner_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testRunnerClass') }})
    test_targets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTargets') }})
    use_orchestrator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useOrchestrator') }})
    
