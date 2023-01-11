import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awssecuritygroup as shared_awssecuritygroup

class AwsVMDetailsArchitectureEnum(str, Enum):
    VM_ARCHITECTURE_UNSPECIFIED = "VM_ARCHITECTURE_UNSPECIFIED"
    I386 = "I386"
    X86_64 = "X86_64"
    ARM64 = "ARM64"
    X86_64_MAC = "X86_64_MAC"

class AwsVMDetailsBootOptionEnum(str, Enum):
    BOOT_OPTION_UNSPECIFIED = "BOOT_OPTION_UNSPECIFIED"
    EFI = "EFI"
    BIOS = "BIOS"

class AwsVMDetailsPowerStateEnum(str, Enum):
    POWER_STATE_UNSPECIFIED = "POWER_STATE_UNSPECIFIED"
    ON = "ON"
    OFF = "OFF"
    SUSPENDED = "SUSPENDED"
    PENDING = "PENDING"

class AwsVMDetailsVirtualizationTypeEnum(str, Enum):
    VM_VIRTUALIZATION_TYPE_UNSPECIFIED = "VM_VIRTUALIZATION_TYPE_UNSPECIFIED"
    HVM = "HVM"
    PARAVIRTUAL = "PARAVIRTUAL"


@dataclass_json
@dataclasses.dataclass
class AwsVMDetails:
    r"""AwsVMDetails
    AwsVmDetails describes a VM in AWS.
    """
    
    architecture: Optional[AwsVMDetailsArchitectureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    boot_option: Optional[AwsVMDetailsBootOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOption') }})
    committed_storage_mb: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committedStorageMb') }})
    cpu_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    disk_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskCount') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    memory_mb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryMb') }})
    os_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osDescription') }})
    power_state: Optional[AwsVMDetailsPowerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerState') }})
    security_groups: Optional[list[shared_awssecuritygroup.AwsSecurityGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    source_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDescription') }})
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceId') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    virtualization_type: Optional[AwsVMDetailsVirtualizationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualizationType') }})
    vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmId') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcId') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
