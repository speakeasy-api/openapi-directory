import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duration as shared_duration


@dataclass_json
@dataclasses.dataclass
class TestTiming:
    r"""TestTiming
    Testing timing break down to know phases.
    """
    
    test_process_duration: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testProcessDuration') }})
    
