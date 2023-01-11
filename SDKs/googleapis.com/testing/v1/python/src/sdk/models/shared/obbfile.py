import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filereference as shared_filereference


@dataclass_json
@dataclasses.dataclass
class ObbFile:
    r"""ObbFile
    An opaque binary blob file to install on the device before the test starts.
    """
    
    obb: Optional[shared_filereference.FileReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obb') }})
    obb_file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obbFileName') }})
    
