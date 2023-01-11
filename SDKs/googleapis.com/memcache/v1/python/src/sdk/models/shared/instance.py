import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancemessage as shared_instancemessage
from ..shared import googlecloudmemcachev1maintenancepolicy as shared_googlecloudmemcachev1maintenancepolicy
from ..shared import nodeconfig as shared_nodeconfig
from ..shared import memcacheparameters as shared_memcacheparameters
from ..shared import googlecloudmemcachev1maintenancepolicy as shared_googlecloudmemcachev1maintenancepolicy
from ..shared import maintenanceschedule as shared_maintenanceschedule
from ..shared import node as shared_node
from ..shared import memcacheparameters as shared_memcacheparameters

class InstanceMemcacheVersionEnum(str, Enum):
    MEMCACHE_VERSION_UNSPECIFIED = "MEMCACHE_VERSION_UNSPECIFIED"
    MEMCACHE_1_5 = "MEMCACHE_1_5"

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    PERFORMING_MAINTENANCE = "PERFORMING_MAINTENANCE"


@dataclass_json
@dataclasses.dataclass
class InstanceInput:
    r"""InstanceInput
    A Memorystore for Memcached instance
    """
    
    authorized_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    instance_messages: Optional[list[shared_instancemessage.InstanceMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceMessages') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_policy: Optional[shared_googlecloudmemcachev1maintenancepolicy.GoogleCloudMemcacheV1MaintenancePolicyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    memcache_version: Optional[InstanceMemcacheVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_config: Optional[shared_nodeconfig.NodeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    parameters: Optional[shared_memcacheparameters.MemcacheParametersInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    

@dataclass_json
@dataclasses.dataclass
class Instance:
    r"""Instance
    A Memorystore for Memcached instance
    """
    
    authorized_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    discovery_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveryEndpoint') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    instance_messages: Optional[list[shared_instancemessage.InstanceMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceMessages') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_policy: Optional[shared_googlecloudmemcachev1maintenancepolicy.GoogleCloudMemcacheV1MaintenancePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    maintenance_schedule: Optional[shared_maintenanceschedule.MaintenanceSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceSchedule') }})
    memcache_full_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheFullVersion') }})
    memcache_nodes: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheNodes') }})
    memcache_version: Optional[InstanceMemcacheVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memcacheVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_config: Optional[shared_nodeconfig.NodeConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    parameters: Optional[shared_memcacheparameters.MemcacheParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    state: Optional[InstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
