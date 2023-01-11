import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gkenodepoolacceleratorconfig as shared_gkenodepoolacceleratorconfig


@dataclass_json
@dataclasses.dataclass
class GkeNodeConfig:
    r"""GkeNodeConfig
    Parameters that describe cluster nodes.
    """
    
    accelerators: Optional[list[shared_gkenodepoolacceleratorconfig.GkeNodePoolAcceleratorConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    boot_disk_kms_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskKmsKey') }})
    local_ssd_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localSsdCount') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    min_cpu_platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    preemptible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    spot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spot') }})
    
