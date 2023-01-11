import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2LabelDisplayHints:
    r"""GoogleAppsDriveLabelsV2LabelDisplayHints
    UI display hints for rendering the label.
    """
    
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    hidden_in_search: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenInSearch') }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    shown_in_apply: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shownInApply') }})
    
