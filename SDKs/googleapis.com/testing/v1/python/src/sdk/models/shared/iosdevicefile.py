import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference


@dataclass_json
@dataclasses.dataclass
class IosDeviceFile:
    r"""IosDeviceFile
    A file or directory to install on the device before the test starts.
    """
    
    bundle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    content: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    device_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePath') }})
    
