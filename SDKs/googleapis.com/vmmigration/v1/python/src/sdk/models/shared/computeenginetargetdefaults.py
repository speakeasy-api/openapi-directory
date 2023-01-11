import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appliedlicense as shared_appliedlicense
from ..shared import computescheduling as shared_computescheduling
from ..shared import networkinterface as shared_networkinterface

class ComputeEngineTargetDefaultsBootOptionEnum(str, Enum):
    COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
    COMPUTE_ENGINE_BOOT_OPTION_EFI = "COMPUTE_ENGINE_BOOT_OPTION_EFI"
    COMPUTE_ENGINE_BOOT_OPTION_BIOS = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"

class ComputeEngineTargetDefaultsDiskTypeEnum(str, Enum):
    COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
    COMPUTE_ENGINE_DISK_TYPE_STANDARD = "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
    COMPUTE_ENGINE_DISK_TYPE_SSD = "COMPUTE_ENGINE_DISK_TYPE_SSD"
    COMPUTE_ENGINE_DISK_TYPE_BALANCED = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"

class ComputeEngineTargetDefaultsLicenseTypeEnum(str, Enum):
    COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
    COMPUTE_ENGINE_LICENSE_TYPE_PAYG = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
    COMPUTE_ENGINE_LICENSE_TYPE_BYOL = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"


@dataclass_json
@dataclasses.dataclass
class ComputeEngineTargetDefaults:
    r"""ComputeEngineTargetDefaults
    ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
    """
    
    additional_licenses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalLicenses') }})
    applied_license: Optional[shared_appliedlicense.AppliedLicense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLicense') }})
    boot_option: Optional[ComputeEngineTargetDefaultsBootOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOption') }})
    compute_scheduling: Optional[shared_computescheduling.ComputeScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeScheduling') }})
    disk_type: Optional[ComputeEngineTargetDefaultsDiskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    license_type: Optional[ComputeEngineTargetDefaultsLicenseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    machine_type_series: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeSeries') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    network_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    secure_boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureBoot') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    target_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    vm_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmName') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

@dataclass_json
@dataclasses.dataclass
class ComputeEngineTargetDefaultsInput:
    r"""ComputeEngineTargetDefaultsInput
    ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
    """
    
    additional_licenses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalLicenses') }})
    applied_license: Optional[shared_appliedlicense.AppliedLicense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLicense') }})
    compute_scheduling: Optional[shared_computescheduling.ComputeScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeScheduling') }})
    disk_type: Optional[ComputeEngineTargetDefaultsDiskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    license_type: Optional[ComputeEngineTargetDefaultsLicenseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    machine_type_series: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeSeries') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    network_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    secure_boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureBoot') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    target_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    vm_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmName') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
