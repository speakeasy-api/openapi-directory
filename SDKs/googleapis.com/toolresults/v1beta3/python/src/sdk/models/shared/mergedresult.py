import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outcome as shared_outcome
from ..shared import testsuiteoverview as shared_testsuiteoverview

class MergedResultStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclasses.dataclass
class MergedResult:
    r"""MergedResult
    Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
    """
    
    outcome: Optional[shared_outcome.Outcome] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    state: Optional[MergedResultStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test_suite_overviews: Optional[list[shared_testsuiteoverview.TestSuiteOverview]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSuiteOverviews') }})
    
