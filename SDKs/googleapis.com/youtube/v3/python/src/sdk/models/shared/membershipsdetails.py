import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import membershipsduration as shared_membershipsduration
from ..shared import membershipsdurationatlevel as shared_membershipsdurationatlevel


@dataclass_json
@dataclasses.dataclass
class MembershipsDetails:
    accessible_levels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibleLevels') }})
    highest_accessible_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highestAccessibleLevel') }})
    highest_accessible_level_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highestAccessibleLevelDisplayName') }})
    memberships_duration: Optional[shared_membershipsduration.MembershipsDuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipsDuration') }})
    memberships_duration_at_levels: Optional[list[shared_membershipsdurationatlevel.MembershipsDurationAtLevel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipsDurationAtLevels') }})
    
