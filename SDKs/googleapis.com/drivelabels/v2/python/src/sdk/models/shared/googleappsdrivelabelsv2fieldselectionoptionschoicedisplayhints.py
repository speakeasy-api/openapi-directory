import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2badgecolors as shared_googleappsdrivelabelsv2badgecolors


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints:
    r"""GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints
    UI display hints for rendering an option.
    """
    
    badge_colors: Optional[shared_googleappsdrivelabelsv2badgecolors.GoogleAppsDriveLabelsV2BadgeColors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeColors') }})
    badge_priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgePriority') }})
    dark_badge_colors: Optional[shared_googleappsdrivelabelsv2badgecolors.GoogleAppsDriveLabelsV2BadgeColors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('darkBadgeColors') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    hidden_in_search: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenInSearch') }})
    shown_in_apply: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shownInApply') }})
    
