import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import existingdisk as shared_existingdisk
from ..shared import nfsmount as shared_nfsmount
from ..shared import persistentdisk as shared_persistentdisk


@dataclass_json
@dataclasses.dataclass
class Volume:
    r"""Volume
    Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
    """
    
    existing_disk: Optional[shared_existingdisk.ExistingDisk] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingDisk') }})
    nfs_mount: Optional[shared_nfsmount.NfsMount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsMount') }})
    persistent_disk: Optional[shared_persistentdisk.PersistentDisk] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentDisk') }})
    volume: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
