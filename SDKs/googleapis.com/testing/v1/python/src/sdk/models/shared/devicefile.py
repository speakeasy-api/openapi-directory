import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obbfile as shared_obbfile
from ..shared import regularfile as shared_regularfile


@dataclass_json
@dataclasses.dataclass
class DeviceFile:
    r"""DeviceFile
    A single device file description.
    """
    
    obb_file: Optional[shared_obbfile.ObbFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obbFile') }})
    regular_file: Optional[shared_regularfile.RegularFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularFile') }})
    
