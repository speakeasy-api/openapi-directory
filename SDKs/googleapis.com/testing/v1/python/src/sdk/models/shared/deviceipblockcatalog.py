import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceipblock as shared_deviceipblock


@dataclass_json
@dataclasses.dataclass
class DeviceIPBlockCatalog:
    r"""DeviceIPBlockCatalog
    List of IP blocks used by the Firebase Test Lab
    """
    
    ip_blocks: Optional[list[shared_deviceipblock.DeviceIPBlock]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipBlocks') }})
    
