import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidinstrumentationtest as shared_androidinstrumentationtest
from ..shared import androidrobotest as shared_androidrobotest
from ..shared import androidtestloop as shared_androidtestloop
from ..shared import iostestloop as shared_iostestloop
from ..shared import iostestsetup as shared_iostestsetup
from ..shared import iosxctest as shared_iosxctest
from ..shared import testsetup as shared_testsetup


@dataclass_json
@dataclasses.dataclass
class TestSpecification:
    r"""TestSpecification
    A description of how to run the test.
    """
    
    android_instrumentation_test: Optional[shared_androidinstrumentationtest.AndroidInstrumentationTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInstrumentationTest') }})
    android_robo_test: Optional[shared_androidrobotest.AndroidRoboTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidRoboTest') }})
    android_test_loop: Optional[shared_androidtestloop.AndroidTestLoop] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidTestLoop') }})
    disable_performance_metrics: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disablePerformanceMetrics') }})
    disable_video_recording: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableVideoRecording') }})
    ios_test_loop: Optional[shared_iostestloop.IosTestLoop] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTestLoop') }})
    ios_test_setup: Optional[shared_iostestsetup.IosTestSetup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTestSetup') }})
    ios_xc_test: Optional[shared_iosxctest.IosXcTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosXcTest') }})
    test_setup: Optional[shared_testsetup.TestSetup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSetup') }})
    test_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTimeout') }})
    
