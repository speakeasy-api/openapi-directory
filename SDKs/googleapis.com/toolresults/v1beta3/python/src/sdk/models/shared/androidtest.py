import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidappinfo as shared_androidappinfo
from ..shared import androidinstrumentationtest as shared_androidinstrumentationtest
from ..shared import androidrobotest as shared_androidrobotest
from ..shared import duration as shared_duration


@dataclass_json
@dataclasses.dataclass
class AndroidTest:
    r"""AndroidTest
    An Android mobile test specification.
    """
    
    android_app_info: Optional[shared_androidappinfo.AndroidAppInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidAppInfo') }})
    android_instrumentation_test: Optional[shared_androidinstrumentationtest.AndroidInstrumentationTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInstrumentationTest') }})
    android_robo_test: Optional[shared_androidrobotest.AndroidRoboTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidRoboTest') }})
    android_test_loop: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidTestLoop') }})
    test_timeout: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTimeout') }})
    
