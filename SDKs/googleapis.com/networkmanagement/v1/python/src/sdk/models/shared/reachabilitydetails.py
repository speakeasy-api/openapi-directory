import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status
from ..shared import trace as shared_trace

class ReachabilityDetailsResultEnum(str, Enum):
    RESULT_UNSPECIFIED = "RESULT_UNSPECIFIED"
    REACHABLE = "REACHABLE"
    UNREACHABLE = "UNREACHABLE"
    AMBIGUOUS = "AMBIGUOUS"
    UNDETERMINED = "UNDETERMINED"


@dataclass_json
@dataclasses.dataclass
class ReachabilityDetails:
    r"""ReachabilityDetails
    Results of the configuration analysis from the last run of the test.
    """
    
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    result: Optional[ReachabilityDetailsResultEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    traces: Optional[list[shared_trace.Trace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('traces') }})
    verify_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyTime') }})
    
