import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acceleratorconfig as shared_acceleratorconfig
from ..shared import diskconfig as shared_diskconfig
from ..shared import instancereference as shared_instancereference
from ..shared import managedgroupconfig as shared_managedgroupconfig

class InstanceGroupConfigPreemptibilityEnum(str, Enum):
    PREEMPTIBILITY_UNSPECIFIED = "PREEMPTIBILITY_UNSPECIFIED"
    NON_PREEMPTIBLE = "NON_PREEMPTIBLE"
    PREEMPTIBLE = "PREEMPTIBLE"
    SPOT = "SPOT"


@dataclass_json
@dataclasses.dataclass
class InstanceGroupConfig:
    r"""InstanceGroupConfig
    The config settings for Compute Engine resources in an instance group, such as a master or worker group.
    """
    
    accelerators: Optional[list[shared_acceleratorconfig.AcceleratorConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    disk_config: Optional[shared_diskconfig.DiskConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskConfig') }})
    image_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    instance_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    instance_references: Optional[list[shared_instancereference.InstanceReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceReferences') }})
    is_preemptible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPreemptible') }})
    machine_type_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeUri') }})
    managed_group_config: Optional[shared_managedgroupconfig.ManagedGroupConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedGroupConfig') }})
    min_cpu_platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    num_instances: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numInstances') }})
    preemptibility: Optional[InstanceGroupConfigPreemptibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptibility') }})
    

@dataclass_json
@dataclasses.dataclass
class InstanceGroupConfigInput:
    r"""InstanceGroupConfigInput
    The config settings for Compute Engine resources in an instance group, such as a master or worker group.
    """
    
    accelerators: Optional[list[shared_acceleratorconfig.AcceleratorConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    disk_config: Optional[shared_diskconfig.DiskConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskConfig') }})
    image_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    machine_type_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeUri') }})
    min_cpu_platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    num_instances: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numInstances') }})
    preemptibility: Optional[InstanceGroupConfigPreemptibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptibility') }})
    
