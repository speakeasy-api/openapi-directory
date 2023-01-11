import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attacheddisk as shared_attacheddisk
from ..shared import networkconfig as shared_networkconfig
from ..shared import schedulingconfig as shared_schedulingconfig
from ..shared import serviceaccount as shared_serviceaccount
from ..shared import shieldedinstanceconfig as shared_shieldedinstanceconfig
from ..shared import networkendpoint as shared_networkendpoint
from ..shared import symptom as shared_symptom

class NodeHealthEnum(str, Enum):
    HEALTH_UNSPECIFIED = "HEALTH_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    TIMEOUT = "TIMEOUT"
    UNHEALTHY_TENSORFLOW = "UNHEALTHY_TENSORFLOW"
    UNHEALTHY_MAINTENANCE = "UNHEALTHY_MAINTENANCE"

class NodeAPIVersionEnum(str, Enum):
    API_VERSION_UNSPECIFIED = "API_VERSION_UNSPECIFIED"
    V1_ALPHA1 = "V1_ALPHA1"
    V1 = "V1"
    V2_ALPHA1 = "V2_ALPHA1"
    V2 = "V2"

class NodeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    RESTARTING = "RESTARTING"
    REIMAGING = "REIMAGING"
    DELETING = "DELETING"
    REPAIRING = "REPAIRING"
    STOPPED = "STOPPED"
    STOPPING = "STOPPING"
    STARTING = "STARTING"
    PREEMPTED = "PREEMPTED"
    TERMINATED = "TERMINATED"
    HIDING = "HIDING"
    HIDDEN = "HIDDEN"
    UNHIDING = "UNHIDING"


@dataclass_json
@dataclasses.dataclass
class NodeInput:
    r"""NodeInput
    A TPU instance.
    """
    
    accelerator_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrBlock') }})
    data_disks: Optional[list[shared_attacheddisk.AttachedDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisks') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    health: Optional[NodeHealthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_config: Optional[shared_networkconfig.NetworkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    runtime_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    scheduling_config: Optional[shared_schedulingconfig.SchedulingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingConfig') }})
    service_account: Optional[shared_serviceaccount.ServiceAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    shielded_instance_config: Optional[shared_shieldedinstanceconfig.ShieldedInstanceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class Node:
    r"""Node
    A TPU instance.
    """
    
    accelerator_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    api_version: Optional[NodeAPIVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrBlock') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_disks: Optional[list[shared_attacheddisk.AttachedDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisks') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    health: Optional[NodeHealthEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    health_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthDescription') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_config: Optional[shared_networkconfig.NetworkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_endpoints: Optional[list[shared_networkendpoint.NetworkEndpoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkEndpoints') }})
    runtime_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    scheduling_config: Optional[shared_schedulingconfig.SchedulingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingConfig') }})
    service_account: Optional[shared_serviceaccount.ServiceAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    shielded_instance_config: Optional[shared_shieldedinstanceconfig.ShieldedInstanceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    state: Optional[NodeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    symptoms: Optional[list[shared_symptom.Symptom]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symptoms') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
