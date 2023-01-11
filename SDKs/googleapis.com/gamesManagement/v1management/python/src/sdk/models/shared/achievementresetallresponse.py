import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import achievementresetresponse as shared_achievementresetresponse


@dataclass_json
@dataclasses.dataclass
class AchievementResetAllResponse:
    r"""AchievementResetAllResponse
    Achievement reset all response.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    results: Optional[list[shared_achievementresetresponse.AchievementResetResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
