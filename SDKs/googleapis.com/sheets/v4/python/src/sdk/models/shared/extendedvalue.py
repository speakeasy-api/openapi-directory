import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorvalue as shared_errorvalue


@dataclass_json
@dataclasses.dataclass
class ExtendedValue:
    r"""ExtendedValue
    The kinds of value that a cell in a spreadsheet can have.
    """
    
    bool_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    error_value: Optional[shared_errorvalue.ErrorValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorValue') }})
    formula_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formulaValue') }})
    number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberValue') }})
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
