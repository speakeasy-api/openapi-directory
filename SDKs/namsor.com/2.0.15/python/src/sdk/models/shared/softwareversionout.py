import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SoftwareVersionOut:
    r"""SoftwareVersionOut
    The software version.
    """
    
    software_name_and_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareNameAndVersion') }})
    software_version: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareVersion') }})
    
