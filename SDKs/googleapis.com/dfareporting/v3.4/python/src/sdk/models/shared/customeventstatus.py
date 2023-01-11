import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customevent as shared_customevent
from ..shared import customeventerror as shared_customeventerror


@dataclass_json
@dataclasses.dataclass
class CustomEventStatus:
    r"""CustomEventStatus
    The original custom event that was inserted and whether there were any errors.
    """
    
    custom_event: Optional[shared_customevent.CustomEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customEvent') }})
    errors: Optional[list[shared_customeventerror.CustomEventError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
