import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MoveProjectRequest:
    r"""MoveProjectRequest
    The request sent to MoveProject method.
    """
    
    destination_parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationParent') }})
    
