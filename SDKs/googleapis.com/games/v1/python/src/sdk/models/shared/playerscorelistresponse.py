import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playerscoreresponse as shared_playerscoreresponse


@dataclass_json
@dataclasses.dataclass
class PlayerScoreListResponse:
    r"""PlayerScoreListResponse
    A list of score submission statuses.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    submitted_scores: Optional[list[shared_playerscoreresponse.PlayerScoreResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedScores') }})
    
