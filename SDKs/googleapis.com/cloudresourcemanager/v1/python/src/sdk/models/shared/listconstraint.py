import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListConstraint:
    r"""ListConstraint
    A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
    """
    
    suggested_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedValue') }})
    supports_under: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsUnder') }})
    
