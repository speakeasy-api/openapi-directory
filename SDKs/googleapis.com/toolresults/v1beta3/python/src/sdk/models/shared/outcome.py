import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failuredetail as shared_failuredetail
from ..shared import inconclusivedetail as shared_inconclusivedetail
from ..shared import skippeddetail as shared_skippeddetail
from ..shared import successdetail as shared_successdetail

class OutcomeSummaryEnum(str, Enum):
    UNSET = "unset"
    SUCCESS = "success"
    FAILURE = "failure"
    INCONCLUSIVE = "inconclusive"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclasses.dataclass
class Outcome:
    r"""Outcome
    Interprets a result so that humans and machines can act on it.
    """
    
    failure_detail: Optional[shared_failuredetail.FailureDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureDetail') }})
    inconclusive_detail: Optional[shared_inconclusivedetail.InconclusiveDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inconclusiveDetail') }})
    skipped_detail: Optional[shared_skippeddetail.SkippedDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedDetail') }})
    success_detail: Optional[shared_successdetail.SuccessDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successDetail') }})
    summary: Optional[OutcomeSummaryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
