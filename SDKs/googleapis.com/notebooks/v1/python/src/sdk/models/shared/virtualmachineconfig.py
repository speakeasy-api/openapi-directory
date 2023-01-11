import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeacceleratorconfig as shared_runtimeacceleratorconfig
from ..shared import containerimage as shared_containerimage
from ..shared import localdisk as shared_localdisk
from ..shared import encryptionconfig as shared_encryptionconfig
from ..shared import runtimeshieldedinstanceconfig as shared_runtimeshieldedinstanceconfig
from ..shared import localdisk as shared_localdisk

class VirtualMachineConfigNicTypeEnum(str, Enum):
    UNSPECIFIED_NIC_TYPE = "UNSPECIFIED_NIC_TYPE"
    VIRTIO_NET = "VIRTIO_NET"
    GVNIC = "GVNIC"


@dataclass_json
@dataclasses.dataclass
class VirtualMachineConfigInput:
    r"""VirtualMachineConfigInput
    The config settings for virtual machine.
    """
    
    accelerator_config: Optional[shared_runtimeacceleratorconfig.RuntimeAcceleratorConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    boot_image: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootImage') }})
    container_images: Optional[list[shared_containerimage.ContainerImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImages') }})
    data_disk: Optional[shared_localdisk.LocalDiskInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisk') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    internal_ip_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIpOnly') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nic_type: Optional[VirtualMachineConfigNicTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicType') }})
    reserved_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    shielded_instance_config: Optional[shared_runtimeshieldedinstanceconfig.RuntimeShieldedInstanceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class VirtualMachineConfig:
    r"""VirtualMachineConfig
    The config settings for virtual machine.
    """
    
    accelerator_config: Optional[shared_runtimeacceleratorconfig.RuntimeAcceleratorConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    boot_image: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootImage') }})
    container_images: Optional[list[shared_containerimage.ContainerImage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImages') }})
    data_disk: Optional[shared_localdisk.LocalDisk] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisk') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    guest_attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestAttributes') }})
    internal_ip_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIpOnly') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nic_type: Optional[VirtualMachineConfigNicTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicType') }})
    reserved_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    shielded_instance_config: Optional[shared_runtimeshieldedinstanceconfig.RuntimeShieldedInstanceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    subnet: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
