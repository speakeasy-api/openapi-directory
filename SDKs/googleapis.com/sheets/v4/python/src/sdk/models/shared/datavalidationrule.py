import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import booleancondition as shared_booleancondition


@dataclass_json
@dataclasses.dataclass
class DataValidationRule:
    r"""DataValidationRule
    A data validation rule.
    """
    
    condition: Optional[shared_booleancondition.BooleanCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    input_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputMessage') }})
    show_custom_ui: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCustomUi') }})
    strict: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    
