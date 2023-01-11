import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MoveFolderRequest:
    r"""MoveFolderRequest
    The MoveFolder request message.
    """
    
    destination_parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationParent') }})
    
