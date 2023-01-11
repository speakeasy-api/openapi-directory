import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import achievementupdaterequest as shared_achievementupdaterequest


@dataclass_json
@dataclasses.dataclass
class AchievementUpdateMultipleRequest:
    r"""AchievementUpdateMultipleRequest
    A list of achievement update requests.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    updates: Optional[list[shared_achievementupdaterequest.AchievementUpdateRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updates') }})
    
