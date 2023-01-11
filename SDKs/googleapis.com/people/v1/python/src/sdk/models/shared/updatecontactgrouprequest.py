import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactgroup as shared_contactgroup


@dataclass_json
@dataclasses.dataclass
class UpdateContactGroupRequestInput:
    r"""UpdateContactGroupRequestInput
    A request to update an existing user contact group. All updated fields will be replaced.
    """
    
    contact_group: Optional[shared_contactgroup.ContactGroupInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroup') }})
    read_group_fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readGroupFields') }})
    update_group_fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateGroupFields') }})
    
