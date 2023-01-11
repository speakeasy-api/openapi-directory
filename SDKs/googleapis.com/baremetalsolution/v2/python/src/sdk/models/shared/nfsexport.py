import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NfsExportPermissionsEnum(str, Enum):
    PERMISSIONS_UNSPECIFIED = "PERMISSIONS_UNSPECIFIED"
    READ_ONLY = "READ_ONLY"
    READ_WRITE = "READ_WRITE"


@dataclass_json
@dataclasses.dataclass
class NfsExport:
    r"""NfsExport
    A NFS export entry.
    """
    
    allow_dev: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowDev') }})
    allow_suid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSuid') }})
    cidr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidr') }})
    machine_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineId') }})
    network_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkId') }})
    no_root_squash: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRootSquash') }})
    permissions: Optional[NfsExportPermissionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
