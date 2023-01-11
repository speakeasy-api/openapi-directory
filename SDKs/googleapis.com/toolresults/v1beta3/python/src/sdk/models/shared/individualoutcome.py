import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duration as shared_duration

class IndividualOutcomeOutcomeSummaryEnum(str, Enum):
    UNSET = "unset"
    SUCCESS = "success"
    FAILURE = "failure"
    INCONCLUSIVE = "inconclusive"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclasses.dataclass
class IndividualOutcome:
    r"""IndividualOutcome
    Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
    """
    
    multistep_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multistepNumber') }})
    outcome_summary: Optional[IndividualOutcomeOutcomeSummaryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcomeSummary') }})
    run_duration: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runDuration') }})
    step_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    
