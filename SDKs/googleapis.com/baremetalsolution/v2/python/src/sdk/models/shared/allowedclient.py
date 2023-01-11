import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AllowedClientMountPermissionsEnum(str, Enum):
    MOUNT_PERMISSIONS_UNSPECIFIED = "MOUNT_PERMISSIONS_UNSPECIFIED"
    READ = "READ"
    READ_WRITE = "READ_WRITE"


@dataclass_json
@dataclasses.dataclass
class AllowedClient:
    r"""AllowedClient
    Represents an 'access point' for the share.
    """
    
    allow_dev: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowDev') }})
    allow_suid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSuid') }})
    allowed_clients_cidr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedClientsCidr') }})
    mount_permissions: Optional[AllowedClientMountPermissionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPermissions') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nfs_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsPath') }})
    no_root_squash: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRootSquash') }})
    share_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareIp') }})
    

@dataclass_json
@dataclasses.dataclass
class AllowedClientInput:
    r"""AllowedClientInput
    Represents an 'access point' for the share.
    """
    
    allow_dev: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowDev') }})
    allow_suid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSuid') }})
    allowed_clients_cidr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedClientsCidr') }})
    mount_permissions: Optional[AllowedClientMountPermissionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPermissions') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    no_root_squash: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noRootSquash') }})
    
