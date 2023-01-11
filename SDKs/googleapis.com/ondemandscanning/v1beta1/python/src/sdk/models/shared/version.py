import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VersionKindEnum(str, Enum):
    VERSION_KIND_UNSPECIFIED = "VERSION_KIND_UNSPECIFIED"
    NORMAL = "NORMAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"


@dataclass_json
@dataclasses.dataclass
class Version:
    r"""Version
    Version contains structured information about the version of a package.
    """
    
    epoch: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epoch') }})
    full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    inclusive: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusive') }})
    kind: Optional[VersionKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
