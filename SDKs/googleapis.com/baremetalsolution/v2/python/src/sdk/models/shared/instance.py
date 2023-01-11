import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudbaremetalsolutionv2logicalinterface as shared_googlecloudbaremetalsolutionv2logicalinterface
from ..shared import lun as shared_lun
from ..shared import network as shared_network
from ..shared import volume as shared_volume
from ..shared import lun as shared_lun
from ..shared import volume as shared_volume

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    RUNNING = "RUNNING"
    DELETED = "DELETED"
    UPDATING = "UPDATING"
    STARTING = "STARTING"
    STOPPING = "STOPPING"
    SHUTDOWN = "SHUTDOWN"

class InstanceWorkloadProfileEnum(str, Enum):
    WORKLOAD_PROFILE_UNSPECIFIED = "WORKLOAD_PROFILE_UNSPECIFIED"
    WORKLOAD_PROFILE_GENERIC = "WORKLOAD_PROFILE_GENERIC"
    WORKLOAD_PROFILE_HANA = "WORKLOAD_PROFILE_HANA"


@dataclass_json
@dataclasses.dataclass
class Instance:
    r"""Instance
    A server.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    hyperthreading_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreadingEnabled') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interactive_serial_console_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactiveSerialConsoleEnabled') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logical_interfaces: Optional[list[shared_googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    login_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginInfo') }})
    luns: Optional[list[shared_lun.Lun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('luns') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    networks: Optional[list[shared_network.Network]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    os_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    pod: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pod') }})
    state: Optional[InstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    workload_profile: Optional[InstanceWorkloadProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadProfile') }})
    

@dataclass_json
@dataclasses.dataclass
class InstanceInput:
    r"""InstanceInput
    A server.
    """
    
    hyperthreading_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreadingEnabled') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logical_interfaces: Optional[list[shared_googlecloudbaremetalsolutionv2logicalinterface.GoogleCloudBaremetalsolutionV2LogicalInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalInterfaces') }})
    luns: Optional[list[shared_lun.LunInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('luns') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTemplate') }})
    os_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    pod: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pod') }})
    volumes: Optional[list[shared_volume.VolumeInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    workload_profile: Optional[InstanceWorkloadProfileEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadProfile') }})
    
