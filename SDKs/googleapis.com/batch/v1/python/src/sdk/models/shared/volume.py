import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcs as shared_gcs
from ..shared import nfs as shared_nfs


@dataclass_json
@dataclasses.dataclass
class Volume:
    r"""Volume
    Volume describes a volume and parameters for it to be mounted to a VM.
    """
    
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    gcs: Optional[shared_gcs.Gcs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcs') }})
    mount_options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountOptions') }})
    mount_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPath') }})
    nfs: Optional[shared_nfs.Nfs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfs') }})
    
