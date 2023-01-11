import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import achievementupdateresponse as shared_achievementupdateresponse


@dataclass_json
@dataclasses.dataclass
class AchievementUpdateMultipleResponse:
    r"""AchievementUpdateMultipleResponse
    Response message for UpdateMultipleAchievements rpc.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    updated_achievements: Optional[list[shared_achievementupdateresponse.AchievementUpdateResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAchievements') }})
    
