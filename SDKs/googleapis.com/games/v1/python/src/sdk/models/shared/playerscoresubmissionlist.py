import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scoresubmission as shared_scoresubmission


@dataclass_json
@dataclasses.dataclass
class PlayerScoreSubmissionList:
    r"""PlayerScoreSubmissionList
    A list of score submission requests.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    scores: Optional[list[shared_scoresubmission.ScoreSubmission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scores') }})
    
