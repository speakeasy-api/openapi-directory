import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import drivefolder as shared_drivefolder
from ..shared import folder as shared_folder
from ..shared import owner as shared_owner


@dataclass_json
@dataclasses.dataclass
class DriveItem:
    r"""DriveItem
    A Drive item, such as a file or folder.
    """
    
    drive_file: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    drive_folder: Optional[shared_drivefolder.DriveFolder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFolder') }})
    file: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    folder: Optional[shared_folder.Folder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[shared_owner.Owner] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
