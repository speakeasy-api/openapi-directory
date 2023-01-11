import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class FreeBusyGroup:
    r"""FreeBusyGroup
    List of calendars that are members of this group.
    """
    
    calendars: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendars') }})
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
