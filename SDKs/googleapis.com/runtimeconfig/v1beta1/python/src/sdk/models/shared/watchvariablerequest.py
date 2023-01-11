import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WatchVariableRequest:
    r"""WatchVariableRequest
    Request for the `WatchVariable()` method.
    """
    
    newer_than: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newerThan') }})
    
