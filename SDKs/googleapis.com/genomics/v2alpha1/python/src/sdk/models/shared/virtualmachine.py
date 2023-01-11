import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accelerator as shared_accelerator
from ..shared import disk as shared_disk
from ..shared import network as shared_network
from ..shared import serviceaccount as shared_serviceaccount
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class VirtualMachine:
    r"""VirtualMachine
    Carries information about a Compute Engine VM resource.
    """
    
    accelerators: Optional[list[shared_accelerator.Accelerator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    boot_disk_size_gb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskSizeGb') }})
    boot_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootImage') }})
    cpu_platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuPlatform') }})
    disks: Optional[list[shared_disk.Disk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    docker_cache_images: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerCacheImages') }})
    enable_stackdriver_monitoring: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStackdriverMonitoring') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    network: Optional[shared_network.Network] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    nvidia_driver_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nvidiaDriverVersion') }})
    preemptible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    reservation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservation') }})
    service_account: Optional[shared_serviceaccount.ServiceAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
