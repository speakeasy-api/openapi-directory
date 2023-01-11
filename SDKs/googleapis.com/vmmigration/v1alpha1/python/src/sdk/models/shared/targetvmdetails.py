import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appliedlicense as shared_appliedlicense
from ..shared import computescheduling as shared_computescheduling
from ..shared import networkinterface as shared_networkinterface

class TargetVMDetailsBootOptionEnum(str, Enum):
    BOOT_OPTION_UNSPECIFIED = "BOOT_OPTION_UNSPECIFIED"
    EFI = "EFI"
    BIOS = "BIOS"

class TargetVMDetailsDiskTypeEnum(str, Enum):
    DISK_TYPE_UNSPECIFIED = "DISK_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    BALANCED = "BALANCED"
    SSD = "SSD"

class TargetVMDetailsLicenseTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    PAYG = "PAYG"
    BYOL = "BYOL"


@dataclass_json
@dataclasses.dataclass
class TargetVMDetails:
    r"""TargetVMDetails
    TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
    """
    
    applied_license: Optional[shared_appliedlicense.AppliedLicense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLicense') }})
    boot_option: Optional[TargetVMDetailsBootOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootOption') }})
    compute_scheduling: Optional[shared_computescheduling.ComputeScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeScheduling') }})
    disk_type: Optional[TargetVMDetailsDiskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    external_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIp') }})
    internal_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIp') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    license_type: Optional[TargetVMDetailsLicenseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    machine_type_series: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeSeries') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    network_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    secure_boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureBoot') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    subnetwork: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    target_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

@dataclass_json
@dataclasses.dataclass
class TargetVMDetailsInput:
    r"""TargetVMDetailsInput
    TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
    """
    
    applied_license: Optional[shared_appliedlicense.AppliedLicense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedLicense') }})
    compute_scheduling: Optional[shared_computescheduling.ComputeScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeScheduling') }})
    disk_type: Optional[TargetVMDetailsDiskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    external_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIp') }})
    internal_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIp') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    license_type: Optional[TargetVMDetailsLicenseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseType') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    machine_type_series: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeSeries') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    network_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTags') }})
    secure_boot: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureBoot') }})
    service_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    subnetwork: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    target_project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProject') }})
    zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
