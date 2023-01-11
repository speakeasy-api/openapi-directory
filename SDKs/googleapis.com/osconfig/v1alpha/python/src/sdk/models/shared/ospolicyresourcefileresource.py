import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyresourcefile as shared_ospolicyresourcefile

class OsPolicyResourceFileResourceStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    CONTENTS_MATCH = "CONTENTS_MATCH"


@dataclass_json
@dataclasses.dataclass
class OsPolicyResourceFileResource:
    r"""OsPolicyResourceFileResource
    A resource that manages the state of a file.
    """
    
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    file: Optional[shared_ospolicyresourcefile.OsPolicyResourceFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    permissions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    state: Optional[OsPolicyResourceFileResourceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
