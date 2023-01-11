import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import watch as shared_watch


@dataclass_json
@dataclasses.dataclass
class CreateWatchRequestInput:
    r"""CreateWatchRequestInput
    Create a new watch.
    """
    
    watch: Optional[shared_watch.WatchInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watch') }})
    watch_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchId') }})
    
