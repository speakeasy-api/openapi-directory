import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import driveitem as shared_driveitem


@dataclass_json
@dataclasses.dataclass
class Drive:
    r"""Drive
    Information about a shared drive.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    root: Optional[shared_driveitem.DriveItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
