import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import valuemapvalentry as shared_valuemapvalentry


@dataclass_json
@dataclasses.dataclass
class Value:
    r"""Value
    Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.
    """
    
    fp_val: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fpVal') }})
    int_val: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intVal') }})
    map_val: Optional[list[shared_valuemapvalentry.ValueMapValEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapVal') }})
    string_val: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringVal') }})
    
