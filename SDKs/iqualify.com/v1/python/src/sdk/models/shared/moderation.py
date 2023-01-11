import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import moderator as shared_moderator


@dataclass_json
@dataclasses.dataclass
class Moderation:
    is_muted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMuted') }})
    moderator: Optional[shared_moderator.Moderator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderator') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
