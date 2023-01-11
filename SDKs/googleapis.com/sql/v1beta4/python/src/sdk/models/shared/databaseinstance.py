import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import diskencryptionconfiguration as shared_diskencryptionconfiguration
from ..shared import diskencryptionstatus as shared_diskencryptionstatus
from ..shared import ipmapping as shared_ipmapping
from ..shared import onpremisesconfiguration as shared_onpremisesconfiguration
from ..shared import sqloutofdiskreport as shared_sqloutofdiskreport
from ..shared import replicaconfiguration as shared_replicaconfiguration
from ..shared import sqlscheduledmaintenance as shared_sqlscheduledmaintenance
from ..shared import sslcert as shared_sslcert
from ..shared import settings as shared_settings

class DatabaseInstanceBackendTypeEnum(str, Enum):
    SQL_BACKEND_TYPE_UNSPECIFIED = "SQL_BACKEND_TYPE_UNSPECIFIED"
    FIRST_GEN = "FIRST_GEN"
    SECOND_GEN = "SECOND_GEN"
    EXTERNAL = "EXTERNAL"

class DatabaseInstanceDatabaseVersionEnum(str, Enum):
    SQL_DATABASE_VERSION_UNSPECIFIED = "SQL_DATABASE_VERSION_UNSPECIFIED"
    MYSQL_5_1 = "MYSQL_5_1"
    MYSQL_5_5 = "MYSQL_5_5"
    MYSQL_5_6 = "MYSQL_5_6"
    MYSQL_5_7 = "MYSQL_5_7"
    SQLSERVER_2017_STANDARD = "SQLSERVER_2017_STANDARD"
    SQLSERVER_2017_ENTERPRISE = "SQLSERVER_2017_ENTERPRISE"
    SQLSERVER_2017_EXPRESS = "SQLSERVER_2017_EXPRESS"
    SQLSERVER_2017_WEB = "SQLSERVER_2017_WEB"
    POSTGRES_9_6 = "POSTGRES_9_6"
    POSTGRES_10 = "POSTGRES_10"
    POSTGRES_11 = "POSTGRES_11"
    POSTGRES_12 = "POSTGRES_12"
    POSTGRES_13 = "POSTGRES_13"
    POSTGRES_14 = "POSTGRES_14"
    MYSQL_8_0 = "MYSQL_8_0"
    MYSQL_8_0_18 = "MYSQL_8_0_18"
    MYSQL_8_0_26 = "MYSQL_8_0_26"
    MYSQL_8_0_27 = "MYSQL_8_0_27"
    MYSQL_8_0_28 = "MYSQL_8_0_28"
    MYSQL_8_0_29 = "MYSQL_8_0_29"
    MYSQL_8_0_30 = "MYSQL_8_0_30"
    SQLSERVER_2019_STANDARD = "SQLSERVER_2019_STANDARD"
    SQLSERVER_2019_ENTERPRISE = "SQLSERVER_2019_ENTERPRISE"
    SQLSERVER_2019_EXPRESS = "SQLSERVER_2019_EXPRESS"
    SQLSERVER_2019_WEB = "SQLSERVER_2019_WEB"


@dataclass_json
@dataclasses.dataclass
class DatabaseInstanceFailoverReplica:
    r"""DatabaseInstanceFailoverReplica
    The name and status of the failover replica.
    """
    
    available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class DatabaseInstanceInstanceTypeEnum(str, Enum):
    SQL_INSTANCE_TYPE_UNSPECIFIED = "SQL_INSTANCE_TYPE_UNSPECIFIED"
    CLOUD_SQL_INSTANCE = "CLOUD_SQL_INSTANCE"
    ON_PREMISES_INSTANCE = "ON_PREMISES_INSTANCE"
    READ_REPLICA_INSTANCE = "READ_REPLICA_INSTANCE"

class DatabaseInstanceStateEnum(str, Enum):
    SQL_INSTANCE_STATE_UNSPECIFIED = "SQL_INSTANCE_STATE_UNSPECIFIED"
    RUNNABLE = "RUNNABLE"
    SUSPENDED = "SUSPENDED"
    PENDING_DELETE = "PENDING_DELETE"
    PENDING_CREATE = "PENDING_CREATE"
    MAINTENANCE = "MAINTENANCE"
    FAILED = "FAILED"
    ONLINE_MAINTENANCE = "ONLINE_MAINTENANCE"

class DatabaseInstanceSuspensionReasonEnum(str, Enum):
    SQL_SUSPENSION_REASON_UNSPECIFIED = "SQL_SUSPENSION_REASON_UNSPECIFIED"
    BILLING_ISSUE = "BILLING_ISSUE"
    LEGAL_ISSUE = "LEGAL_ISSUE"
    OPERATIONAL_ISSUE = "OPERATIONAL_ISSUE"
    KMS_KEY_ISSUE = "KMS_KEY_ISSUE"


@dataclass_json
@dataclasses.dataclass
class DatabaseInstance:
    r"""DatabaseInstance
    A Cloud SQL instance resource.
    """
    
    available_maintenance_versions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMaintenanceVersions') }})
    backend_type: Optional[DatabaseInstanceBackendTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendType') }})
    connection_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    current_disk_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentDiskSize') }})
    database_installed_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseInstalledVersion') }})
    database_version: Optional[DatabaseInstanceDatabaseVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseVersion') }})
    disk_encryption_configuration: Optional[shared_diskencryptionconfiguration.DiskEncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionConfiguration') }})
    disk_encryption_status: Optional[shared_diskencryptionstatus.DiskEncryptionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionStatus') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    failover_replica: Optional[DatabaseInstanceFailoverReplica] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverReplica') }})
    gce_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gceZone') }})
    instance_type: Optional[DatabaseInstanceInstanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    ip_addresses: Optional[list[shared_ipmapping.IPMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    ipv6_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Address') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    maintenance_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceVersion') }})
    master_instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterInstanceName') }})
    max_disk_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDiskSize') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    on_premises_configuration: Optional[shared_onpremisesconfiguration.OnPremisesConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesConfiguration') }})
    out_of_disk_report: Optional[shared_sqloutofdiskreport.SQLOutOfDiskReport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outOfDiskReport') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    replica_configuration: Optional[shared_replicaconfiguration.ReplicaConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaConfiguration') }})
    replica_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaNames') }})
    root_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootPassword') }})
    satisfies_pzs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPzs') }})
    scheduled_maintenance: Optional[shared_sqlscheduledmaintenance.SQLScheduledMaintenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledMaintenance') }})
    secondary_gce_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryGceZone') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    server_ca_cert: Optional[shared_sslcert.SslCert] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCaCert') }})
    service_account_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmailAddress') }})
    settings: Optional[shared_settings.Settings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    state: Optional[DatabaseInstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    suspension_reason: Optional[list[DatabaseInstanceSuspensionReasonEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReason') }})
    

@dataclass_json
@dataclasses.dataclass
class DatabaseInstanceInput:
    r"""DatabaseInstanceInput
    A Cloud SQL instance resource.
    """
    
    available_maintenance_versions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMaintenanceVersions') }})
    backend_type: Optional[DatabaseInstanceBackendTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendType') }})
    connection_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    current_disk_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentDiskSize') }})
    database_version: Optional[DatabaseInstanceDatabaseVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseVersion') }})
    disk_encryption_configuration: Optional[shared_diskencryptionconfiguration.DiskEncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionConfiguration') }})
    disk_encryption_status: Optional[shared_diskencryptionstatus.DiskEncryptionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskEncryptionStatus') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    failover_replica: Optional[DatabaseInstanceFailoverReplica] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverReplica') }})
    gce_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gceZone') }})
    instance_type: Optional[DatabaseInstanceInstanceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    ip_addresses: Optional[list[shared_ipmapping.IPMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    ipv6_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Address') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    maintenance_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceVersion') }})
    master_instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterInstanceName') }})
    max_disk_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDiskSize') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    on_premises_configuration: Optional[shared_onpremisesconfiguration.OnPremisesConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesConfiguration') }})
    out_of_disk_report: Optional[shared_sqloutofdiskreport.SQLOutOfDiskReport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outOfDiskReport') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    replica_configuration: Optional[shared_replicaconfiguration.ReplicaConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaConfiguration') }})
    replica_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaNames') }})
    root_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootPassword') }})
    satisfies_pzs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('satisfiesPzs') }})
    scheduled_maintenance: Optional[shared_sqlscheduledmaintenance.SQLScheduledMaintenance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledMaintenance') }})
    secondary_gce_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryGceZone') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    server_ca_cert: Optional[shared_sslcert.SslCert] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCaCert') }})
    service_account_email_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmailAddress') }})
    settings: Optional[shared_settings.Settings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    state: Optional[DatabaseInstanceStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    suspension_reason: Optional[list[DatabaseInstanceSuspensionReasonEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReason') }})
    
