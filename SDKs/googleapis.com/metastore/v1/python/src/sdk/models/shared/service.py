import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionconfig as shared_encryptionconfig
from ..shared import hivemetastoreconfig as shared_hivemetastoreconfig
from ..shared import maintenancewindow as shared_maintenancewindow
from ..shared import metadatamanagementactivity as shared_metadatamanagementactivity
from ..shared import networkconfig as shared_networkconfig
from ..shared import telemetryconfig as shared_telemetryconfig
from ..shared import networkconfig as shared_networkconfig

class ServiceDatabaseTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    SPANNER = "SPANNER"

class ServiceReleaseChannelEnum(str, Enum):
    RELEASE_CHANNEL_UNSPECIFIED = "RELEASE_CHANNEL_UNSPECIFIED"
    CANARY = "CANARY"
    STABLE = "STABLE"

class ServiceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    SUSPENDING = "SUSPENDING"
    SUSPENDED = "SUSPENDED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ERROR = "ERROR"

class ServiceTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    DEVELOPER = "DEVELOPER"
    ENTERPRISE = "ENTERPRISE"


@dataclass_json
@dataclasses.dataclass
class Service:
    r"""Service
    A managed metastore service that serves metadata queries.
    """
    
    artifact_gcs_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactGcsUri') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database_type: Optional[ServiceDatabaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    endpoint_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUri') }})
    hive_metastore_config: Optional[shared_hivemetastoreconfig.HiveMetastoreConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveMetastoreConfig') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_window: Optional[shared_maintenancewindow.MaintenanceWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    metadata_management_activity: Optional[shared_metadatamanagementactivity.MetadataManagementActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataManagementActivity') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_config: Optional[shared_networkconfig.NetworkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    release_channel: Optional[ServiceReleaseChannelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseChannel') }})
    state: Optional[ServiceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    telemetry_config: Optional[shared_telemetryconfig.TelemetryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryConfig') }})
    tier: Optional[ServiceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class ServiceInput:
    r"""ServiceInput
    A managed metastore service that serves metadata queries.
    """
    
    database_type: Optional[ServiceDatabaseTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    hive_metastore_config: Optional[shared_hivemetastoreconfig.HiveMetastoreConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveMetastoreConfig') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_window: Optional[shared_maintenancewindow.MaintenanceWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_config: Optional[shared_networkconfig.NetworkConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    release_channel: Optional[ServiceReleaseChannelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseChannel') }})
    telemetry_config: Optional[shared_telemetryconfig.TelemetryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryConfig') }})
    tier: Optional[ServiceTierEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    
