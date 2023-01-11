import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iosappinfo as shared_iosappinfo
from ..shared import iostestloop as shared_iostestloop
from ..shared import iosxctest as shared_iosxctest
from ..shared import duration as shared_duration


@dataclass_json
@dataclasses.dataclass
class IosTest:
    r"""IosTest
    A iOS mobile test specification
    """
    
    ios_app_info: Optional[shared_iosappinfo.IosAppInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppInfo') }})
    ios_robo_test: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosRoboTest') }})
    ios_test_loop: Optional[shared_iostestloop.IosTestLoop] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosTestLoop') }})
    ios_xc_test: Optional[shared_iosxctest.IosXcTest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosXcTest') }})
    test_timeout: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTimeout') }})
    
