import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import badgeexpiry as shared_badgeexpiry
from ..shared import criteria as shared_criteria
from ..shared import openbadgeclass as shared_openbadgeclass


@dataclass_json
@dataclasses.dataclass
class Badge:
    badge_expiry: Optional[shared_badgeexpiry.BadgeExpiry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeExpiry') }})
    badge_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeUrl') }})
    criterias: Optional[shared_criteria.Criteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criterias') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    open_badge: Optional[shared_openbadgeclass.OpenBadgeClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openBadge') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
