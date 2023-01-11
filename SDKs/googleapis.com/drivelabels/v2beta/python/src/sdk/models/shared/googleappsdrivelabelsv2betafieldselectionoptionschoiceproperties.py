import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betabadgeconfig as shared_googleappsdrivelabelsv2betabadgeconfig


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties
    Basic properties of the choice.
    """
    
    badge_config: Optional[shared_googleappsdrivelabelsv2betabadgeconfig.GoogleAppsDriveLabelsV2betaBadgeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badgeConfig') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    insert_before_choice: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertBeforeChoice') }})
    
