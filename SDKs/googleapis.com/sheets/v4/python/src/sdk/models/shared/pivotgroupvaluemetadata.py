import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import extendedvalue as shared_extendedvalue


@dataclass_json
@dataclasses.dataclass
class PivotGroupValueMetadata:
    r"""PivotGroupValueMetadata
    Metadata about a value in a pivot grouping.
    """
    
    collapsed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapsed') }})
    value: Optional[shared_extendedvalue.ExtendedValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
