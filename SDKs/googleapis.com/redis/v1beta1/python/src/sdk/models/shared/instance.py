import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import maintenancepolicy as shared_maintenancepolicy
from ..shared import maintenanceschedule as shared_maintenanceschedule
from ..shared import persistenceconfig as shared_persistenceconfig
from ..shared import maintenancepolicy as shared_maintenancepolicy
from ..shared import maintenanceschedule as shared_maintenanceschedule
from ..shared import nodeinfo as shared_nodeinfo
from ..shared import persistenceconfig as shared_persistenceconfig
from ..shared import tlscertificate as shared_tlscertificate

class InstanceConnectModeEnum(str, Enum):
    CONNECT_MODE_UNSPECIFIED = "CONNECT_MODE_UNSPECIFIED"
    DIRECT_PEERING = "DIRECT_PEERING"
    PRIVATE_SERVICE_ACCESS = "PRIVATE_SERVICE_ACCESS"

class InstanceReadReplicasModeEnum(str, Enum):
    READ_REPLICAS_MODE_UNSPECIFIED = "READ_REPLICAS_MODE_UNSPECIFIED"
    READ_REPLICAS_DISABLED = "READ_REPLICAS_DISABLED"
    READ_REPLICAS_ENABLED = "READ_REPLICAS_ENABLED"

class InstanceSuspensionReasonsEnum(str, Enum):
    SUSPENSION_REASON_UNSPECIFIED = "SUSPENSION_REASON_UNSPECIFIED"
    CUSTOMER_MANAGED_KEY_ISSUE = "CUSTOMER_MANAGED_KEY_ISSUE"

class InstanceTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    BASIC = "BASIC"
    STANDARD_HA = "STANDARD_HA"

class InstanceTransitEncryptionModeEnum(str, Enum):
    TRANSIT_ENCRYPTION_MODE_UNSPECIFIED = "TRANSIT_ENCRYPTION_MODE_UNSPECIFIED"
    SERVER_AUTHENTICATION = "SERVER_AUTHENTICATION"
    DISABLED = "DISABLED"

class InstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    REPAIRING = "REPAIRING"
    MAINTENANCE = "MAINTENANCE"
    IMPORTING = "IMPORTING"
    FAILING_OVER = "FAILING_OVER"


@dataclass_json
@dataclasses.dataclass
class InstanceInput:
    r"""InstanceInput
    A Memorystore for Redis instance.
    """
    
    alternative_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeLocationId') }})
    auth_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authEnabled') }})
    authorized_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    available_maintenance_versions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMaintenanceVersions') }})
    connect_mode: Optional[InstanceConnectModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectMode') }})
    customer_managed_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedKey') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    maintenance_policy: Optional[shared_maintenancepolicy.MaintenancePolicyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    maintenance_schedule: Optional[shared_maintenanceschedule.MaintenanceScheduleInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceSchedule') }})
    maintenance_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceVersion') }})
    memory_size_gb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeGb') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    persistence_config: Optional[shared_persistenceconfig.PersistenceConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistenceConfig') }})
    read_replicas_mode: Optional[InstanceReadReplicasModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readReplicasMode') }})
    redis_configs: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redisConfigs') }})
    redis_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redisVersion') }})
    replica_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaCount') }})
    reserved_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    secondary_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryIpRange') }})
    suspension_reasons: Optional[list[InstanceSuspensionReasonsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReasons') }})
    tier: Optional[InstanceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    transit_encryption_mode: Optional[InstanceTransitEncryptionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryptionMode') }})
    

@dataclass_json
@dataclasses.dataclass
class Instance:
    r"""Instance
    A Memorystore for Redis instance.
    """
    
    alternative_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeLocationId') }})
    auth_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authEnabled') }})
    authorized_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetwork') }})
    available_maintenance_versions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMaintenanceVersions') }})
    connect_mode: Optional[InstanceConnectModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectMode') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    current_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLocationId') }})
    customer_managed_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedKey') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    maintenance_policy: Optional[shared_maintenancepolicy.MaintenancePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    maintenance_schedule: Optional[shared_maintenanceschedule.MaintenanceSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceSchedule') }})
    maintenance_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceVersion') }})
    memory_size_gb: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeGb') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nodes: Optional[list[shared_nodeinfo.NodeInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    persistence_config: Optional[shared_persistenceconfig.PersistenceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistenceConfig') }})
    persistence_iam_identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistenceIamIdentity') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    read_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readEndpoint') }})
    read_endpoint_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readEndpointPort') }})
    read_replicas_mode: Optional[InstanceReadReplicasModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readReplicasMode') }})
    redis_configs: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redisConfigs') }})
    redis_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redisVersion') }})
    replica_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaCount') }})
    reserved_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservedIpRange') }})
    secondary_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryIpRange') }})
    server_ca_certs: Optional[list[shared_tlscertificate.TLSCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCaCerts') }})
    state: Optional[InstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    suspension_reasons: Optional[list[InstanceSuspensionReasonsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReasons') }})
    tier: Optional[InstanceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    transit_encryption_mode: Optional[InstanceTransitEncryptionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitEncryptionMode') }})
    
