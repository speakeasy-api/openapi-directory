import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nfsexportoptions as shared_nfsexportoptions


@dataclass_json
@dataclasses.dataclass
class FileShareConfig:
    r"""FileShareConfig
    File share configuration for the instance.
    """
    
    capacity_gb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityGb') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nfs_export_options: Optional[list[shared_nfsexportoptions.NfsExportOptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsExportOptions') }})
    source_backup: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceBackup') }})
    
