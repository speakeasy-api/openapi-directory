"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import guestosdetails as shared_guestosdetails
from ..shared import platformdetails as shared_platformdetails
from ..shared import virtualmachinearchitecturedetails as shared_virtualmachinearchitecturedetails
from ..shared import virtualmachinediskdetails as shared_virtualmachinediskdetails
from ..shared import virtualmachinenetworkdetails as shared_virtualmachinenetworkdetails
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class VirtualMachineDetailsOsFamilyEnum(str, Enum):
    r"""What family the OS belong to, if known."""
    OS_FAMILY_UNKNOWN = 'OS_FAMILY_UNKNOWN'
    OS_FAMILY_WINDOWS = 'OS_FAMILY_WINDOWS'
    OS_FAMILY_LINUX = 'OS_FAMILY_LINUX'
    OS_FAMILY_UNIX = 'OS_FAMILY_UNIX'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class VirtualMachineDetails:
    r"""Details of a VirtualMachine."""
    
    core_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('coreCount'), 'exclude': lambda f: f is None }})
    r"""Number of CPU cores in the VirtualMachine. Must be non-negative."""  
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""VM creation timestamp."""  
    guest_os: Optional[shared_guestosdetails.GuestOsDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('guestOs'), 'exclude': lambda f: f is None }})
    r"""Information from Guest-level collections."""  
    memory_mb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('memoryMb'), 'exclude': lambda f: f is None }})
    r"""The amount of memory in the VirtualMachine. Must be non-negative."""  
    os_family: Optional[VirtualMachineDetailsOsFamilyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('osFamily'), 'exclude': lambda f: f is None }})
    r"""What family the OS belong to, if known."""  
    os_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('osName'), 'exclude': lambda f: f is None }})
    r"""The name of the operating system running on the VirtualMachine."""  
    os_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('osVersion'), 'exclude': lambda f: f is None }})
    r"""The version of the operating system running on the virtual machine."""  
    platform: Optional[shared_platformdetails.PlatformDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('platform'), 'exclude': lambda f: f is None }})
    r"""Information about the platform."""  
    power_state: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('powerState'), 'exclude': lambda f: f is None }})
    r"""Power state of VM (poweredOn or poweredOff)."""  
    vcenter_folder: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vcenterFolder'), 'exclude': lambda f: f is None }})
    r"""Folder name in vCenter where asset resides."""  
    vcenter_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vcenterUrl'), 'exclude': lambda f: f is None }})
    r"""vCenter URL used in collection."""  
    vcenter_vm_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vcenterVmId'), 'exclude': lambda f: f is None }})
    r"""vCenter VM ID."""  
    vm_architecture: Optional[shared_virtualmachinearchitecturedetails.VirtualMachineArchitectureDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vmArchitecture'), 'exclude': lambda f: f is None }})
    r"""Details of the VM architecture."""  
    vm_disks: Optional[shared_virtualmachinediskdetails.VirtualMachineDiskDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vmDisks'), 'exclude': lambda f: f is None }})
    r"""Details of VM disks."""  
    vm_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vmName'), 'exclude': lambda f: f is None }})
    r"""Virtual Machine display name."""  
    vm_network: Optional[shared_virtualmachinenetworkdetails.VirtualMachineNetworkDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vmNetwork'), 'exclude': lambda f: f is None }})
    r"""Details of network adapters and settings."""  
    vm_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vmUuid'), 'exclude': lambda f: f is None }})
    r"""Virtual Machine unique identifier."""  
    