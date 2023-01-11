import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customevent as shared_customevent


@dataclass_json
@dataclasses.dataclass
class CustomEventsBatchInsertRequest:
    r"""CustomEventsBatchInsertRequest
    Insert Custom Events Request.
    """
    
    custom_events: Optional[list[shared_customevent.CustomEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customEvents') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
