import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldvalue as shared_fieldvalue


@dataclass_json
@dataclasses.dataclass
class FieldValueChange:
    r"""FieldValueChange
    Change to a Field value.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    field_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    new_value: Optional[shared_fieldvalue.FieldValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    old_value: Optional[shared_fieldvalue.FieldValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldValue') }})
    
