import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NfsExportOptionsAccessModeEnum(str, Enum):
    ACCESS_MODE_UNSPECIFIED = "ACCESS_MODE_UNSPECIFIED"
    READ_ONLY = "READ_ONLY"
    READ_WRITE = "READ_WRITE"

class NfsExportOptionsSquashModeEnum(str, Enum):
    SQUASH_MODE_UNSPECIFIED = "SQUASH_MODE_UNSPECIFIED"
    NO_ROOT_SQUASH = "NO_ROOT_SQUASH"
    ROOT_SQUASH = "ROOT_SQUASH"


@dataclass_json
@dataclasses.dataclass
class NfsExportOptions:
    r"""NfsExportOptions
    NFS export options specifications.
    """
    
    access_mode: Optional[NfsExportOptionsAccessModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessMode') }})
    anon_gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonGid') }})
    anon_uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonUid') }})
    ip_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipRanges') }})
    squash_mode: Optional[NfsExportOptionsSquashModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('squashMode') }})
    
