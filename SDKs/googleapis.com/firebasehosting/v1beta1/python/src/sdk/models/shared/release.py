import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actinguser as shared_actinguser
from ..shared import version as shared_version

class ReleaseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DEPLOY = "DEPLOY"
    ROLLBACK = "ROLLBACK"
    SITE_DISABLE = "SITE_DISABLE"


@dataclass_json
@dataclasses.dataclass
class Release:
    r"""Release
     A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseTime') }})
    release_user: Optional[shared_actinguser.ActingUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseUser') }})
    type: Optional[ReleaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[shared_version.Version] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
