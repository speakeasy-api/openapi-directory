import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servingconfig as shared_servingconfig
from ..shared import actinguser as shared_actinguser

class VersionStatusEnum(str, Enum):
    VERSION_STATUS_UNSPECIFIED = "VERSION_STATUS_UNSPECIFIED"
    CREATED = "CREATED"
    FINALIZED = "FINALIZED"
    DELETED = "DELETED"
    ABANDONED = "ABANDONED"
    EXPIRED = "EXPIRED"
    CLONING = "CLONING"


@dataclass_json
@dataclasses.dataclass
class Version:
    r"""Version
    A `Version` is a configuration and a collection of static files which determine how a site is displayed.
    """
    
    config: Optional[shared_servingconfig.ServingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    create_user: Optional[shared_actinguser.ActingUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createUser') }})
    delete_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    delete_user: Optional[shared_actinguser.ActingUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteUser') }})
    file_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileCount') }})
    finalize_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalizeTime') }})
    finalize_user: Optional[shared_actinguser.ActingUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalizeUser') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[VersionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionBytes') }})
    
